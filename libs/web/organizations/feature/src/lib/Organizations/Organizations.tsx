// eslint-disable-next-line @nx/enforce-module-boundaries
import { GetAccountOrgs } from '@promptus/web/organizations/data-access/server';
import Projects from '../Projects/Projects';
import { Page } from '@promptus/web-shared-ui/server';

export function OrganizationsFeature() {
  return (
    <Page>
      <GetAccountOrgs>
        {(response) => {
          const aa = response;
          return <Projects />;
        }}
      </GetAccountOrgs>
    </Page>
  );
}

export default OrganizationsFeature;
