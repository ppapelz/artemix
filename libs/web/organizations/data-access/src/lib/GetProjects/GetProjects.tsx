import {
  ApolloQuery,
  GetProjectsByOrgIdQueryVariables,
  GetProjectsByOrgIdQuery,
  GetProjectsByOrgIdDocument,
} from '@artemix/web/shared/data-access/server';

interface GetProjectsProps {
  children: (data: GetProjectsByOrgIdQuery) => JSX.Element;
  organizationId: string;
}

export const GetProjects = async ({
  children,
  organizationId,
}: GetProjectsProps) => {
  const variables: GetProjectsByOrgIdQueryVariables = {
    organizationId,
  };
  return (
    <ApolloQuery<GetProjectsByOrgIdQuery, GetProjectsByOrgIdQueryVariables>
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
