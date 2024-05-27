import {
  GetAccountOrgs,
  GetOrganizationId,
} from '@artemix/web-shared-data-access/server';
import { SelectedOrganizationProvider } from '@artemix/web-shared-data-access';

export function AuthenticatedWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GetOrganizationId>
      {(organizationId) => (
        <GetAccountOrgs>
          {(organizations) => {
            return (
              <SelectedOrganizationProvider
                selectedOrganizationId={organizationId}
                organizations={organizations}
              >
                {children}
              </SelectedOrganizationProvider>
            );
          }}
        </GetAccountOrgs>
      )}
    </GetOrganizationId>
  );
}

export default AuthenticatedWrapper;
