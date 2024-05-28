import { getSSRSessionHelper } from '@artemix/web-shared-util/server';
import UserMetadata from 'supertokens-node/recipe/usermetadata';

interface GetProjectIdProps {
  children: (organizationId: string) => JSX.Element;
}

export const GetProjectId = async ({ children }: GetProjectIdProps) => {
  const { session } = await getSSRSessionHelper();
  const userId = session?.getUserId();

  if (!userId) return null;

  const { metadata } = await UserMetadata.getUserMetadata(userId);

  const projectId = metadata.projectId;
  if (!projectId) return null;

  return children(projectId);
};

export default GetProjectId;
