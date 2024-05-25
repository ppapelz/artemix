import { getSSRSessionHelper } from '@promptus/web/auth/util/server';
import {
  ApolloQuery,
  GetProjectsByOrgIdQueryVariables,
  GetProjectsByOrgIdQuery,
  GetProjectsByOrgIdDocument,
} from '@promptus/web/shared/data-access/server';
import UserMetadata from 'supertokens-node/recipe/usermetadata';

interface GetProjectsProps {
  children: (data: GetProjectsByOrgIdQuery) => JSX.Element;
}

export const GetProjects = async ({ children }: GetProjectsProps) => {
  let orgId = '';
  const { session } = await getSSRSessionHelper();
  const userId = session?.getUserId();
  if (userId) {
    const { metadata } = await UserMetadata.getUserMetadata(userId);
    orgId = metadata.orgId;
  }
  if (orgId) {
    const variables: GetProjectsByOrgIdQueryVariables = {
      orgId,
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
  }
};

export default GetProjects;
