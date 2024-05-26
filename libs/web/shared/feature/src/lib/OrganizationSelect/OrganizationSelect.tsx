'use client';

import { useEffect, useState } from 'react';
import styles from './OrganizationSelect.module.scss';
import { useSeletedOrganization } from '@artemix/web/organizations/data-access';
import { Organization, Project } from '@artemix/web/shared/util';
import { OrganizationDropdown } from '@artemix/web-shared-ui';

export interface OrganizationSelectProps {
  organizations: Array<Organization>;
  organizationId: string;
}

export function OrganizationSelect({
  organizations,
  organizationId,
}: OrganizationSelectProps) {
  const [selectedOrganization, setselectedOrganization] =
    useState<Organization | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { updateSelectedOrganization } = useSeletedOrganization();

  useEffect(() => {
    if (organizations && organizations.length && organizationId) {
      const selectedOrganization = organizations.find(
        (organization) => organization.id === organizationId
      );
      if (selectedOrganization) {
        setselectedOrganization(selectedOrganization);
      }
    }
  }, [organizations, organizationId]);

  const handleSelectOrg = (org: Organization) => {
    setselectedOrganization(org);
    setSelectedProject(org.projects[0]);
    updateOrgIDMetaData(org.id);
    updateSelectedOrganization(org);
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
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
