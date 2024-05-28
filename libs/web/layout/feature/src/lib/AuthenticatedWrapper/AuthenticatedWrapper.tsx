import {
  GetAccountOrgs,
  GetOrganizationId,
  GetProjectId,
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
        <GetProjectId>
          {(projectId) => (
            <GetAccountOrgs>
              {(organizations) => {
                return (
                  <SelectedOrganizationProvider
                    selectedOrganizationId={organizationId}
                    organizations={organizations}
                    selectedProjectId={projectId}
                  >
                    {children}
                  </SelectedOrganizationProvider>
                );
              }}
            </GetAccountOrgs>
          )}
        </GetProjectId>
      )}
    </GetOrganizationId>
  );
}

export default AuthenticatedWrapper;
