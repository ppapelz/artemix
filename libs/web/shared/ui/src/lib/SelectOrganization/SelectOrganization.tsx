'use client';

import styles from './SelectOrganization.module.scss';
import React, { useEffect } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@artemix/web/shared/util';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
  DropdownMenuItem,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { useSeletedOrganization } from '@artemix/web/organizations/data-access';

export interface BaseObject {
  id: string;
  name: string;
}
export interface Organization extends BaseObject {
  projects: Array<Project>;
}

export interface Project extends BaseObject {
  description?: string;
}

export interface SelectOrganizationProps {
  // data: GetAccountOrgsQuery['getOrganizationsByAccountID'];
  data: Array<Organization>;
  organizationId: string;
}

export interface DropdownItemContentProps {
  name: string;
  checked?: boolean;
}

export function DropdownItemContent({
  name,
  checked,
}: DropdownItemContentProps) {
  return (
    <>
      {checked && <Check size={16} />}
      <span className={cn('mr-3', checked ? `ml-3` : `ml-7`)}>{name}</span>
    </>
  );
}

export function SelectOrganization({
  data,
  organizationId,
}: SelectOrganizationProps) {
  const [selectedOrg, setSelectedOrg] = React.useState<Organization | null>(
    null
  );
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(
    null
  );
  const { updateSelectedOrganization } = useSeletedOrganization();

  useEffect(() => {
    if (data && data.length && organizationId) {
      const selectedOrganization = data.find(
        (org: Organization) => org.id === organizationId
      );
      if (selectedOrganization) {
        setSelectedOrg(selectedOrganization);
      }
    }
  }, [data, organizationId]);

  const handleSelectOrg = (org: Organization) => {
    setSelectedOrg(org);
    setSelectedProject(org.projects[0]);
    updateOrgIDMetaData(org.id);
    updateSelectedOrganization(org);
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

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className={styles['container']}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {selectedOrg && (
            <Button variant="link">
              <span className="mr-3">{selectedOrg?.name}'s organization</span>
              <ChevronsUpDown></ChevronsUpDown>
            </Button>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Organizations</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {data?.map((org) =>
            org.projects.length ? (
              <DropdownMenuSub key={org.id}>
                <DropdownMenuSubTrigger onClick={() => handleSelectOrg(org)}>
                  <DropdownItemContent
                    name={org.name}
                    checked={org.id === selectedOrg?.id}
                  />
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuLabel>Projects</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {org.projects.map((project) => (
                      <DropdownMenuItem
                        key={project.id}
                        onClick={() => handleSelectProject(project)}
                      >
                        <DropdownItemContent
                          name={project.name}
                          checked={project.id === selectedProject?.id}
                        />
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            ) : (
              <DropdownMenuItem
                key={org.id}
                onClick={() => handleSelectOrg(org)}
              >
                <DropdownItemContent
                  name={org.name}
                  checked={org.id === selectedOrg?.id}
                />
              </DropdownMenuItem>
            )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default SelectOrganization;
