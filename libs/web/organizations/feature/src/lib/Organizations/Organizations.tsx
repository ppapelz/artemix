import Projects from '../Projects/Projects';
import { Page } from '@artemix/web-layout-feature/server';
import { Navbar } from '@artemix/web-layout-feature';
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
    </>
  );
}

export default OrganizationsFeature;
