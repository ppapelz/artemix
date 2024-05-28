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
    updateSelectedOrganization(org.id);
  };

  const handleSelectProject = (organizationId: string, project: Project) => {
    updateSelectedProject(organizationId, project);
  };

  return (
    <OrganizationDropdown
      organizations={organizations}
      selectedOrganization={selectedOrganization}
      selectedProject={selectedProject}
      onSelectOrganization={handleSelectOrg}
      onSelectProject={handleSelectProject}
    ></OrganizationDropdown>
  );
}

export default OrganizationSelect;
