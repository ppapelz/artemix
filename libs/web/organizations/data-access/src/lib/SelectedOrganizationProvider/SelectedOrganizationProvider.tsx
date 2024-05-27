'use client';

import { Organization, Project } from '@artemix/web-shared-util';
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useCallback,
} from 'react';

export interface OrganizationContextType {
  organizations: Array<Organization>;
  selectedOrganization: Organization | undefined;
  updateSelectedOrganization: (organizationId: string) => void;
  projects: Array<Project> | undefined;
  selectedProject: Project | undefined;
  updateSelectedProject: (organizationId: string, project: Project) => void;
}

export interface SelectedOrganizationProviderProps {
  children: ReactNode;
  selectedOrganizationId: string;
  organizations: Array<Organization>;
  selectedProjectId?: string;
}

const OrganizationContext = createContext<OrganizationContextType | undefined>(
  undefined
);

export const SelectedOrganizationProvider = ({
  children,
  selectedOrganizationId,
  organizations,
}: SelectedOrganizationProviderProps) => {
  const [selectedOrganization, setSelectedOrganization] =
    useState<Organization>();
  const [selectedProject, setSelectedProject] = useState<Project>();

  const updateSelectedOrganization = useCallback(
    (organizationId: string): void => {
      const selectedOrganization = organizations.find(
        (organization) => organization.id === organizationId
      );
      if (selectedOrganization) {
        setSelectedOrganization(selectedOrganization);
      }
    },
    [organizations, setSelectedOrganization]
  );

  const updateSelectedProject = (organizationId: string, project: Project) => {
    updateSelectedOrganization(organizationId);
    setSelectedProject(project);
  };

  useEffect(() => {
    updateSelectedOrganization(selectedOrganizationId);
  }, [selectedOrganizationId, updateSelectedOrganization]);

  return (
    <OrganizationContext.Provider
      value={{
        organizations,
        selectedOrganization,
        projects: organizations[0]?.projects,
        selectedProject,
        updateSelectedOrganization,
        updateSelectedProject,
      }}
    >
      {children}
    </OrganizationContext.Provider>
  );
};

export const useSeletedOrganization = () => {
  const context = useContext(OrganizationContext);
  if (!context) {
    throw new Error(
      'useSeletedOrganization must be used within an SelectedOrganizationProvider'
    );
  }
  return context;
};
