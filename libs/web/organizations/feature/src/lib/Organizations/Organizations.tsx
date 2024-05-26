// eslint-disable-next-line @nx/enforce-module-boundaries
import { SelectedOrganizationProvider } from '@artemix/web/organizations/data-access';
import Projects from '../Projects/Projects';
import { Page } from '@promtus/web-feature-layout/server';
import { Navbar } from '@promtus/web-feature-layout';
import { SelectOrgWrapper } from '../SelectOrganization/SelectOrgWrapper';
import { GetProjects } from '@artemix/web/organizations/data-access/server';
import { GetOrganizationId } from '@artemix/web/shared/data-access/server';

export function OrganizationsFeature() {
  return (
    <GetOrganizationId>
      {(organizationId) => (
        <SelectedOrganizationProvider>
          <Navbar>
            <SelectOrgWrapper
              organizationId={organizationId}
            ></SelectOrgWrapper>
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
