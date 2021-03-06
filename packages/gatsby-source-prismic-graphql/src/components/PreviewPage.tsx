import React from 'react';
import Prismic from 'prismic-javascript';
import { linkResolver, getCookies } from '../utils';
import { parseQueryString } from '../utils/parseQueryString';
import { pathToRegexp } from 'path-to-regexp';
import { Endpoints, PreviewCookie } from '../utils/prismic';

interface Variation {
  id: string;
  label: string;
  ref: string;
}

export default class PreviewPage extends React.Component<any> {
  public componentDidMount() {
    this.preview();
  }

  get config() {
    return (window as any).prismicGatsbyOptions;
  }

  public async preview() {
    const { location } = this.props;
    const qs = parseQueryString(String(location.search).substr(1));
    const token = qs.get('token');
    const experiment = qs.get('experiment');
    const documentId = qs.get('documentId');

    // Expiration date of cookie
    const now = new Date();
    now.setHours(now.getHours() + 1);

    const api = await Prismic.getApi(Endpoints.v2(this.config.repositoryName), {
      accessToken: this.config.accessToken,
    });

    if (token) {
      await api.previewSession(token, linkResolver, '/');
      document.cookie = `${
        Prismic.previewCookie
      }=${token}; expires=${now.toUTCString()}; path=/; SameSite=None; Secure`;

      if (!documentId) {
        return this.redirect();
      }

      const doc = await api.getByID(documentId);

      return this.redirect(doc);
    } else if (experiment) {
      const runningVariations: Variation[] = [];

      if (api.experiments.running && api.experiments.running.length) {
        runningVariations.concat(
          ...api.experiments.running.map(experiment => experiment.data.variations)
        );
      }

      if (experiment && runningVariations.length) {
        const matchedVariation = runningVariations.find(
          variation => variation.label.toLowerCase().replace(' ', '-') === experiment
        );

        if (matchedVariation) {
          document.cookie = `${Prismic.experimentCookie}=${
            matchedVariation.ref
          }; expires=${now.toUTCString()}; path=/; SameSite=None; Secure`;

          this.redirect();
        }
      }
    } else if (documentId) {
      const cookies = getCookies();
      const doc = await api.getByID(documentId);
      const preview =
        Boolean(PreviewCookie.ref(this.config.repositoryName)) ||
        cookies.has(Prismic.experimentCookie);

      this.redirect(preview && doc);
    }
  }

  public redirect = async (doc?: any) => {
    if (!doc) {
      (window as any).location = '/';
      return;
    }

    const link = linkResolver(doc);
    const exists = (await fetch(link).then(res => res.status)) === 200;

    if (!exists) {
      const urlWithQueryString = (this.config.pages || [])
        .map((page: any) => {
          const keys: any = [];

          if (!page.match) {
            return page.path;
          }

          const re = pathToRegexp(page.match, keys);
          const match = re.exec(link);
          const delimiter = (str: string) => (str.indexOf('?') === -1 ? '?' : '&');
          if (match) {
            return match
              .slice(1)
              .reduce(
                (acc, value, i) =>
                  acc + (keys[i] ? `${delimiter(acc)}${keys[i].name}=${value}` : value),
                page.path
              );
          }
          return null;
        })
        .find((n: any) => !!n);

      if (urlWithQueryString) {
        window.location = urlWithQueryString;
      } else {
        window.location = link as any;
      }
    } else {
      window.location = link as any;
    }
  };

  public render() {
    return null;
  }
}
