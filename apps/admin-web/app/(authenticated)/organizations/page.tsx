import { Navbar } from '@promptus/web-shared-ui';
import { OrganizationsFeature, SelectOrgWrapper } from '@promptus/web/organizations/feature/server';

const Organizations = () => {
  return (
    <>
      <Navbar>
        <SelectOrgWrapper></SelectOrgWrapper>
      </Navbar>
      <div className="pt-6">
        <OrganizationsFeature />
      </div>
    </>
  );
};

export default Organizations;
