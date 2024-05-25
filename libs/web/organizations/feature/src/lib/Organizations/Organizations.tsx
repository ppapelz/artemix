// eslint-disable-next-line @nx/enforce-module-boundaries
import { OrganizationProvider } from '@promptus/web/organizations/data-access';
import Projects from '../Projects/Projects';
import { Page } from '@promtus/web-feature-layout/server';
import { Navbar } from '@promtus/web-feature-layout';
import { SelectOrgWrapper } from '../SelectOrganization/SelectOrgWrapper';
import { GetProjects } from '@promptus/web/organizations/data-access/server';

export function OrganizationsFeature() {
  return (
    <OrganizationProvider>
      <Navbar>
        <SelectOrgWrapper></SelectOrgWrapper>
      </Navbar>
      <Page>
        <GetProjects>
          {(response) => {
            return <Projects data={response.getProjectsByOrgID} />;
          }}
        </GetProjects>
      </Page>
    </OrganizationProvider>
  );
}

export default OrganizationsFeature;
