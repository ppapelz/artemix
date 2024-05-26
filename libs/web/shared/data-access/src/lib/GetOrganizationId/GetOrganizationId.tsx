import { getSSRSessionHelper } from '@artemix/web-auth-util/server';
import UserMetadata from 'supertokens-node/recipe/usermetadata';

interface GetOrganizationIdProps {
  children: (organizationId: string) => JSX.Element;
}

export const GetOrganizationId = async ({
  children,
}: GetOrganizationIdProps) => {
  const { session } = await getSSRSessionHelper();
  const userId = session?.getUserId();

  if (!userId) return null;

  const { metadata } = await UserMetadata.getUserMetadata(userId);

  const orgId = metadata.orgId;
  if (!orgId) return null;
  
  return children(orgId);
};

export default GetOrganizationId;
