// eslint-disable-next-line @nx/enforce-module-boundaries
import { SelectedOrganizationProvider } from '@artemix/web-organizations-data-access';
import Projects from '../Projects/Projects';
import { Page } from '@artemix/web-layout-feature/server';
import { Navbar } from '@artemix/web-layout-feature';
import { OrganizationSelectWrapper } from '../OrganizationSelectWrapper/OrganizationSelectWrapper';
import { GetProjects } from '@artemix/web-organizations-data-access/server';
import { GetOrganizationId } from '@artemix/web-shared-data-access/server';

export function OrganizationsFeature() {
  return (
    <GetOrganizationId>
      {(organizationId) => (
        <SelectedOrganizationProvider>
          <Navbar>
            <OrganizationSelectWrapper
              organizationId={organizationId}
            ></OrganizationSelectWrapper>
          </Navbar>
          <Page>
            <GetProjects organizationId={organizationId}>
              {(response) => <Projects data={response} />}
            </GetProjects>
          </Page>
        </SelectedOrganizationProvider>
      )}
    </GetOrganizationId>
  );
}

export default OrganizationsFeature;
