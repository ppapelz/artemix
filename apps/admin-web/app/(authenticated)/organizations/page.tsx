import { Navbar } from '@promptus/web-shared-ui';
import { OrganizationsFeature } from '@promptus/web/organizations/feature/server';
import { SelectOrganization } from '@promptus/web/organizations/feature';

const Organizations = () => {
  return (
    <>
      <Navbar>
        <SelectOrganization></SelectOrganization>
      </Navbar>
      <div className="pt-6">
        <OrganizationsFeature />
      </div>
    </>
  );
};

export default Organizations;
