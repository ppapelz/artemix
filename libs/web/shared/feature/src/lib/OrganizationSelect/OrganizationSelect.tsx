'use client';

import { Organization, Project } from '@artemix/web-shared-util';
import { OrganizationDropdown } from '@artemix/web-shared-ui';
import { useSeletedOrganization } from '@artemix/web-shared-data-access';

export interface OrganizationSelectProps {
  organizations: Array<Organization>;
  organizationId: string;
}

export function OrganizationSelect() {
  const {
    organizations,
    selectedOrganization,
    selectedProject,
    updateSelectedOrganization,
    updateSelectedProject,
  } = useSeletedOrganization();

  const handleSelectOrg = (org: Organization) => {
    updateSelectedProject(org.id, org.projects[0]);
    updateOrgIDMetaData(org.id);
    updateSelectedOrganization(org.id);
  };

  const handleSelectProject = (organizationId: string, project: Project) => {
    updateOrgIDMetaData(organizationId);
    updateSelectedProject(organizationId, project);
  };

  const updateOrgIDMetaData = async (orgId: string) => {
    try {
      await fetch('/api/user-metadata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: 'orgId', value: orgId }),
        credentials: 'include',
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <OrganizationDropdown
      organizations={organizations}
      selectedOrgganization={selectedOrganization}
      selectedProject={selectedProject}
      onSelectOrganization={handleSelectOrg}
      onSelectProject={handleSelectProject}
    ></OrganizationDropdown>
  );
}

export default OrganizationSelect;
