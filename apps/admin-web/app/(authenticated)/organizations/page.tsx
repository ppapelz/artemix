import { OrganizationsFeature, SelectOrgWrapper } from '@promptus/web/organizations/feature/server';
import { Navbar } from '@promtus/web-feature-layout';

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
