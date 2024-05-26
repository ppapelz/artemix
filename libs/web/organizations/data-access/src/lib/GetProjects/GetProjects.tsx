import { ApolloQuery } from '@artemix/web/shared/data-access/server';
import {
  GetProjectsByOrgIdDocument,
  IGetProjectsByOrgIdQuery,
  IGetProjectsByOrgIdQueryVariables,
  Project,
} from '@artemix/web/shared/util';

interface GetProjectsProps {
  children: (data: Array<Project>) => JSX.Element;
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
        if (!data.getProjectsByOrgID) return <p>No data found</p>;
        return children(data.getProjectsByOrgID);
      }}
    </ApolloQuery>
  );
};

export default GetProjects;
