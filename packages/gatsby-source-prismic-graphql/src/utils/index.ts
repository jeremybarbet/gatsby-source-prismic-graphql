import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';
import { HttpOptions } from 'apollo-link-http-common';
import Prismic from 'prismic-javascript';
import { Endpoints } from './prismic';
import { parseQueryString } from './parseQueryString';
import { ApolloLink } from 'apollo-link';

interface IPrismicLinkArgs extends HttpOptions {
  uri: string;
  accessToken?: string;
  customRef?: string;
  credentials?: string;
  useGETForQueries?: boolean;
}

// @todo should this be configurable?
export const fieldName = 'prismic';
export const typeName = 'PRISMIC';

// keep link resolver function
export let linkResolver: (doc: any) => string = () => '/';

export function registerLinkResolver(link: typeof linkResolver) {
  linkResolver = link;
}

export function getCookies(): Map<string, string> {
  return parseQueryString(document.cookie, ';');
}

export function getDocumentIndexFromCursor(cursor: string) {
  return atob(cursor).split(':')[1];
}

export function getCursorFromDocumentIndex(index: number) {
  return btoa(`arrayconnection:${index}`);
}

export function fetchStripQueryWhitespace(url: string, ...args: any) {
  const [hostname, qs = ''] = url.split('?');
  const queryString = parseQueryString(qs);

  if (queryString.has('query')) {
    queryString.set(
      'query',
      String(queryString.get('query'))
        .replace(/\#.*\n/g, '')
        .replace(/\s+/g, ' ')
        .replace(/\s?\{\s?/g, '{')
        .replace(/\s?\}\s?/g, '}')
        .replace(/\s?\:\s?/g, ':')
        .replace(/\s?\(\s?/g, '(')
        .replace(/\s?\)\s?/g, ')')
        .replace(/\.\.\.\s/g, '...')
        .replace(/\,\s/g, ',')
    );
  }
  const updatedQs = Array.from(queryString)
    .map(n => n.map(j => encodeURIComponent(j)).join('='))
    .join('&');
  const updatedUrl = `${hostname}?${updatedQs}`;

  return fetch(updatedUrl, ...args);
}

/**
 * Apollo Link for Prismic
 * @param options Options
 */
export function PrismicLink({
  uri,
  accessToken,
  customRef,
  ...rest
}: IPrismicLinkArgs): ApolloLink {
  const BaseURIReg = /^(https?:\/\/.+?\..+?\..+?)\/graphql\/?$/;

  if (BaseURIReg.test(uri)) {
    const prismicClient = Prismic.client(Endpoints.v2(uri), { accessToken });

    const prismicLink = setContext(async (_, options: { headers: { [key: string]: string } }) => {
      let prismicRef;

      if (typeof window !== 'undefined' && document.cookie) {
        const cookies = getCookies();

        if (cookies.has(Prismic.experimentCookie)) {
          prismicRef = cookies.get(Prismic.experimentCookie);
        } else {
          prismicRef = cookies.get(Prismic.previewCookie);
        }
      }

      if (!prismicRef) {
        const api = await prismicClient.getApi();
        prismicRef = api.masterRef.ref;
      }

      const authorizationHeader = accessToken ? { Authorization: `Token ${accessToken}` } : {};

      // if custom ref has been defined, then use that to pull content instead of default master ref
      prismicRef = typeof customRef === 'undefined' || customRef === null ? prismicRef : customRef;

      return {
        headers: {
          ...options.headers,
          ...authorizationHeader,
          'Prismic-ref': prismicRef,
        },
      };
    });

    const editButtonLink = new ApolloLink((operation, forward) => {
      operation.setContext(({ headers }: { headers: Record<string, string> }) => {
        const mainContext = operation.getContext().graphqlContext || {};
        const pageContext = mainContext.context || {};
        const pageHeaders = pageContext.headers;

        return {
          headers: {
            ...headers,
            ...pageHeaders,
          },
        };
      });
      return (forward && forward(operation)) || null;
    });

    const httpLink = new HttpLink({
      uri,
      useGETForQueries: true,
      ...rest,
      fetch: fetchStripQueryWhitespace,
    });

    return ApolloLink.from([prismicLink as any, editButtonLink, httpLink]);
  } else {
    throw new Error(`${uri} isn't a valid Prismic GraphQL endpoint`);
  }
}
