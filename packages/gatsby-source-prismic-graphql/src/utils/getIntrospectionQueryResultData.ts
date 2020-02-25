import { Endpoints } from './prismic';

export const getIntrospectionQueryResultData = ({ repositoryName, accessToken }: any) =>
  new Promise((resolve, reject) => {
    const token = (str: string) => (accessToken ? `${str}access_token=${accessToken}` : '');
    const query =
      '?query=%7B%20__schema%20%7B%20types%20%7B%20kind%20name%20possibleTypes%20%7B%20name%20%7D%20%7D%20%7D%20%7D';

    fetch(`${Endpoints.v2(repositoryName)}${token('?')}`)
      .then(result => result.json())
      .then((data: any) => {
        const ref = (data.refs || []).find((r: any) => r.id === 'master');

        if (!ref) {
          return;
        }

        fetch(`${Endpoints.graphql(repositoryName)}${query}${token('&')}`, {
          headers: { 'prismic-ref': ref.ref },
        })
          .then((result: any) => result.json())
          .then((result: any) => {
            try {
              const filteredData = result.data.__schema.types.filter(
                (type: any) => type.possibleTypes !== null
              );

              result.data.__schema.types = filteredData;
              resolve(result.data);
            } catch (err) {
              reject(err);
            }
          });
      });
  });
