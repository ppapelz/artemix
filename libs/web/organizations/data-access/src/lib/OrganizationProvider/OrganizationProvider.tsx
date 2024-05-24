'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Organization {
  id: string;
  name: string;
  projects: Array<any>;
}

interface OrganizationContextType {
  organization: Organization;
  updateOrganization: (newOrganization: Organization) => void;
}

const defaultOrganization: Organization = {
  id: '',
  name: '',
  projects: [],
};

const OrganizationContext = createContext<OrganizationContextType | undefined>(
  undefined
);

export const OrganizationProvider = ({ children }: { children: ReactNode }) => {
  const [organization, setOrganization] =
    useState<Organization>(defaultOrganization);

  const updateOrganization = (newOrganization: Organization) => {
    setOrganization(newOrganization);
  };

  return (
    <OrganizationContext.Provider value={{ organization, updateOrganization }}>
      {children}
    </OrganizationContext.Provider>
  );
};

export const useOrganization = () => {
  const context = useContext(OrganizationContext);
  if (!context) {
    throw new Error(
      'useOrganization must be used within an OrganizationProvider'
    );
  }
  return context;
};
