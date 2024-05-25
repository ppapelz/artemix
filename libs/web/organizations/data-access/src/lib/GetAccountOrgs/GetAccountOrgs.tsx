import { getSSRSessionHelper } from '@artemix/web/auth/util/server';
import {
  ApolloQuery,
  GetAccountOrgsQueryVariables,
  GetAccountOrgsQuery,
  GetAccountOrgsDocument,
} from '@artemix/web/shared/data-access/server';

interface GetAccountOrgsProps {
  children: (data: GetAccountOrgsQuery) => JSX.Element;
}

export const GetAccountOrgs = async ({ children }: GetAccountOrgsProps) => {
  const { session } = await getSSRSessionHelper();
  const userId = session?.getUserId();
  const variables: GetAccountOrgsQueryVariables = {
    accountId: userId as string,
  };

  return (
    <ApolloQuery<GetAccountOrgsQuery, GetAccountOrgsQueryVariables>
      query={GetAccountOrgsDocument}
      variables={variables}
    >
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error! {error.message}</p>;
        return data ? children(data) : <p>No data found</p>;
      }}
    </ApolloQuery>
  );
};

export default GetAccountOrgs;
