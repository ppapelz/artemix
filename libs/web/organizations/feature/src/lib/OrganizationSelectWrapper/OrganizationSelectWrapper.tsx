import { OrganizationSelect } from '@artemix/web-shared-feature';
import { GetAccountOrgs } from '@artemix/web-organizations-data-access/server';

interface OrganizationSelectWrapperProps {
  organizationId: string;
}

export const OrganizationSelectWrapper = ({
  organizationId,
}: OrganizationSelectWrapperProps) => {
  return (
    <GetAccountOrgs>
      {(organizations) => {
        return (
          <OrganizationSelect
            organizationId={organizationId}
            organizations={organizations}
          />
        );
      }}
    </GetAccountOrgs>
  );
};
