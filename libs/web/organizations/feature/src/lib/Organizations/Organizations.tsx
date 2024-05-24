// eslint-disable-next-line @nx/enforce-module-boundaries
import Projects from '../Projects/Projects';
import { Page } from '@promtus/web-feature-layout/server';

export function OrganizationsFeature() {
  console.log('OrganizationsFeature server')
  return (
    <Page>
        <Projects />
    </Page>
  );
}

export default OrganizationsFeature;
