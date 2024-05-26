'use client';

import styles from './OrganizationDropdown.module.scss';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn, Organization, Project } from '@artemix/web-shared-util';
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

export interface OrganizationDropdownProps {
  organizations: Array<Organization>;
  selectedOrgganization: Organization | null;
  selectedProject: Project | null;
  onSelectOrganization: (item: Organization) => void;
  onSelectProject: (item: Project) => void;
}

export function OrganizationDropdown({
  organizations,
  selectedOrgganization,
  selectedProject,
  onSelectOrganization,
  onSelectProject
}: OrganizationDropdownProps) {
  return (
    <div className={styles['container']}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {selectedOrgganization && (
            <Button variant="link">
              <span className="mr-3">{selectedOrgganization?.name}'s organization</span>
              <ChevronsUpDown></ChevronsUpDown>
            </Button>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Organizations</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {organizations?.map((organization) =>
            organization.projects.length ? (
              <DropdownMenuSub key={organization.id}>
                <DropdownMenuSubTrigger onClick={() => onSelectOrganization(organization)}>
                  <DropdownItemContent
                    name={organization.name}
                    checked={organization.id === selectedOrgganization?.id}
                  />
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuLabel>Projects</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {organization.projects.map((project) => (
                      <DropdownMenuItem
                        key={project.id}
                        onClick={() => onSelectProject(project)}
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
                key={organization.id}
                onClick={() => onSelectOrganization(organization)}
              >
                <DropdownItemContent
                  name={organization.name}
                  checked={organization.id === selectedOrgganization?.id}
                />
              </DropdownMenuItem>
            )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default OrganizationDropdown;
