import { getSSRSessionHelper } from '@artemix/web-auth-util/server';
import { ApolloQuery } from '@artemix/web-shared-data-access/server';
import {
  GetAccountOrgsDocument,
  IGetAccountOrgsQuery,
  IGetAccountOrgsQueryVariables,
  Organization,
} from '@artemix/web-shared-util';

interface GetAccountOrgsProps {
  children: (data: Array<Organization>) => JSX.Element;
}

export const GetAccountOrgs = async ({ children }: GetAccountOrgsProps) => {
  const { session } = await getSSRSessionHelper();
  const userId = session?.getUserId();
  const variables: IGetAccountOrgsQueryVariables = {
    accountId: userId as string,
  };

  return (
    <ApolloQuery<IGetAccountOrgsQuery, IGetAccountOrgsQueryVariables>
      query={GetAccountOrgsDocument}
      variables={variables}
    >
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error! {error.message}</p>;
        if (!data.getOrganizationsByAccountID) return <p>Error! "null data"</p>;
        return data ? children(data.getOrganizationsByAccountID) : <p>No data found</p>;
      }}
    </ApolloQuery>
  );
};

export default GetAccountOrgs;
