'use client';

import { Organization, Project } from '@artemix/web-shared-util';
import {
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
  selectedProject: Project | undefined;
  updateSelectedProject: (organizationId: string, project: Project) => void;
}

export interface SelectedOrganizationProviderProps {
  children: ReactNode;
  selectedOrganizationId: string;
  organizations: Array<Organization>;
  selectedProjectId: string;
}

const OrganizationContext = createContext<OrganizationContextType | undefined>(
  undefined
);

export const SelectedOrganizationProvider = ({
  children,
  selectedOrganizationId,
  organizations,
  selectedProjectId,
}: SelectedOrganizationProviderProps) => {
  const [selectedOrganization, setSelectedOrganization] = useState<
    Organization | undefined
  >(() => organizations.find((org) => org.id === selectedOrganizationId));
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(
    () =>
      organizations
        .find((org) => org.id === selectedOrganizationId)
        ?.projects.find((proj) => proj.id === selectedProjectId)
  );
  const updateSelectedOrganization = useCallback(
    (organizationId: string): void => {
      const selectedOrganization = organizations.find(
        (organization) => organization.id === organizationId
      );
      if (selectedOrganization) {
        updateOrganizationMetaData(organizationId);
        setSelectedOrganization(selectedOrganization);
      }
    },
    [organizations, setSelectedOrganization]
  );

  const updateSelectedProject = (organizationId: string, project: Project) => {
    updateSelectedProjectMetaData(project.id);
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
        selectedProject,
        updateSelectedOrganization,
        updateSelectedProject,
      }}
    >
      {children}
    </OrganizationContext.Provider>
  );
};

const updateOrganizationMetaData = async (orgId: string) => {
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

const updateSelectedProjectMetaData = async (projectId: string) => {
  try {
    await fetch('/api/user-metadata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key: 'projectId', value: projectId }),
      credentials: 'include',
    });
  } catch (err) {
    console.error(err);
  }
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
