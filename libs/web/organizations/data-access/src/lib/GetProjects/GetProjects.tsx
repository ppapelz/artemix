import {
  ApolloQuery,
} from '@artemix/web/shared/data-access/server';
import { GetProjectsByOrgIdDocument, IGetProjectsByOrgIdQuery, IGetProjectsByOrgIdQueryVariables } from '@artemix/web/shared/util';

interface GetProjectsProps {
  children: (data: IGetProjectsByOrgIdQuery) => JSX.Element;
  organizationId: string;
}

export const GetProjects = async ({
  children,
  organizationId,
}: GetProjectsProps) => {
  const variables: IGetProjectsByOrgIdQueryVariables = {
    organizationId,
  };
  return (
    <ApolloQuery<IGetProjectsByOrgIdQuery, IGetProjectsByOrgIdQueryVariables>
      query={GetProjectsByOrgIdDocument}
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

export default GetProjects;
