import { Navbar } from '@promptus/web-shared-ui';
import { OrganizationsFeature } from '@promptus/web/organizations/feature/server';
import { SelectOrganization } from '@promptus/web/organizations/feature';

const Organizations = () => {
  return (
    <>
      <Navbar>
        <SelectOrganization></SelectOrganization>
      </Navbar>
      <OrganizationsFeature />
    </>
  );
};

export default Organizations;
