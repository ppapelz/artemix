'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Organization {
  id: string;
  name: string;
  projects: Array<any>;
}

interface OrganizationContextType {
  selectedOrganization: Organization;
  updateSelectedOrganization: (newOrganization: Organization) => void;
}

const defaultSelectedOrganization: Organization = {
  id: '',
  name: '',
  projects: [],
};

const OrganizationContext = createContext<OrganizationContextType | undefined>(
  undefined
);

export const SelectedOrganizationProvider = ({ children }: { children: ReactNode }) => {
  const [selectedOrganization, setOrganization] =
    useState<Organization>(defaultSelectedOrganization);

  const updateSelectedOrganization = (newOrganization: Organization) => {
    setOrganization(newOrganization);
  };

  return (
    <OrganizationContext.Provider value={{ selectedOrganization, updateSelectedOrganization }}>
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
