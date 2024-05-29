import { getSSRSessionHelper } from '@artemix/web-shared-util/server';
import UserMetadata from 'supertokens-node/recipe/usermetadata';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { ORGANIZATION_PATH_NAME } from '@artemix/web/shared/util';

interface GetProjectIdProps {
  children: (organizationId: string) => JSX.Element;
}

export const GetProjectId = async ({ children }: GetProjectIdProps) => {
  const { session } = await getSSRSessionHelper();
  const userId = session?.getUserId();
  const pathname = headers().get('x-current-path');

  if (!userId) return null;

  const { metadata } = await UserMetadata.getUserMetadata(userId);

  const projectId = metadata.projectId;
  if (!projectId && pathname !== ORGANIZATION_PATH_NAME)
    return redirect(ORGANIZATION_PATH_NAME);

  return children(projectId);
};

export default GetProjectId;
