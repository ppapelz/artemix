import {
  OrganizationsFeature,
  SelectOrgWrapper,
} from '@promptus/web/organizations/feature/server';
import { Navbar } from '@promtus/web-feature-layout';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { OrganizationProvider } from '@promptus/web/organizations/data-access';
import UserMetadata from "supertokens-node/recipe/usermetadata";
import { getSSRSessionHelper } from '@promptus/web/auth/util/server';

const Organizations = async () => {
  const { session } = await getSSRSessionHelper();
  const userId = session?.getUserId();
  if (userId) {
    const { metadata } = await UserMetadata.getUserMetadata(userId);
    console.log(metadata)
  }

  const updateOrgId = async (orgId: string) => {
    if (userId) {
      await UserMetadata.updateUserMetadata(userId, { orgId });
    }
  }

  return (
    <>
      <OrganizationProvider>
        <Navbar>
          <SelectOrgWrapper updateOrgId={updateOrgId}></SelectOrgWrapper>
        </Navbar>
        <div className="pt-6">
          <OrganizationsFeature />
        </div>
      </OrganizationProvider>
    </>
  );
};

export default Organizations;
