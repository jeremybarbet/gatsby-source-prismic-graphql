import { ApolloClient } from 'apollo-boost';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { getIntrospectionQueryResultData } from './getIntrospectionQueryResultData';
import { PrismicLink } from './index';
import { Endpoints } from './prismic';
import { PluginOptions } from '../interfaces/PluginOptions';

let client: ApolloClient<any> | undefined = undefined;

export const getApolloClient = async ({
  repositoryName,
  accessToken,
}: PluginOptions): Promise<ApolloClient<any>> => {
  if (!client) {
    const introspectionQueryResultData: any = await getIntrospectionQueryResultData({
      repositoryName,
      accessToken,
    });
    const fragmentMatcher = new IntrospectionFragmentMatcher({ introspectionQueryResultData });

    client = new ApolloClient({
      cache: new InMemoryCache({ fragmentMatcher }),
      link: PrismicLink({
        uri: Endpoints.graphql(repositoryName),
        credentials: 'same-origin',
        accessToken: accessToken as any,
      }),
    });
  }
  return client;
};
