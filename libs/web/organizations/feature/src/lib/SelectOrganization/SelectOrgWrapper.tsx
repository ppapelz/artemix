import { SelectOrganization } from '@promptus/web-shared-ui';
import { GetAccountOrgs } from '@promptus/web/organizations/data-access/server';

export const SelectOrgWrapper = () => {
  return (
    <GetAccountOrgs>
      {(response) => {
        return (
          <SelectOrganization data={response.getOrganizationsByAccountID} />
        );
      }}
    </GetAccountOrgs>
  );
};
