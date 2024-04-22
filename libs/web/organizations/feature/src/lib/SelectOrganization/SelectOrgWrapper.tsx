import { GetAccountOrgs } from '@promptus/web/organizations/data-access/server';
import SelectOrganization from './SelectOrganization';

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
