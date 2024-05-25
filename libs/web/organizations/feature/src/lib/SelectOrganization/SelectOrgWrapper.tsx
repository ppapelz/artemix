import { SelectOrganization } from '@artemix/web-shared-ui';
import { GetAccountOrgs } from '@artemix/web/organizations/data-access/server';

interface SelectOrgWrapperProps {
  organizationId: string;
}

export const SelectOrgWrapper = ({ organizationId }: SelectOrgWrapperProps) => {
  return (
    <GetAccountOrgs>
      {(response) => {
        return (
          <SelectOrganization
            organizationId={organizationId}
            data={response.getOrganizationsByAccountID}
          />
        );
      }}
    </GetAccountOrgs>
  );
};
