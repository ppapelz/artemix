// eslint-disable-next-line @nx/enforce-module-boundaries
import { SelectedOrganizationProvider } from '@artemix/web-organizations-data-access';
import Projects from '../Projects/Projects';
import { Page } from '@artemix/web-layout-feature/server';
import { Navbar } from '@artemix/web-layout-feature';
import { OrganizationSelectWrapper } from '../OrganizationSelectWrapper/OrganizationSelectWrapper';
import { GetProjects } from '@artemix/web-organizations-data-access/server';
import { GetOrganizationId } from '@artemix/web-shared-data-access/server';
import { OrganizationSelect } from '@artemix/web-shared-feature';

export function OrganizationsFeature() {
  return (
    <>
      <Navbar>
        <OrganizationSelect />
      </Navbar>
      <Page>
        <Projects/>
      </Page>
      {/* <Page>
        <GetProjects organizationId={organizationId}>
          {(response) => <Projects data={response} />}
        </GetProjects>
      </Page> */}
    </>
  );
}

export default OrganizationsFeature;
