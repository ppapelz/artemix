'use client';

import React, { createContext, useContext } from 'react';
import {
  ICreateProjectInput,
  Project,
  useCreateProjectMutation,
} from '@artemix/web/shared/util';

interface ProjectContextProps {
  createProject: (input: ICreateProjectInput) => Promise<void>;
  loading: boolean;
  error: any;
  data: Project | undefined;
}

const AddProjectContext = createContext<ProjectContextProps | undefined>(
  undefined
);

export const AddProjectProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [createProjectMutation, { data, loading, error }] =
    useCreateProjectMutation();

  const createProject = async (input: ICreateProjectInput) => {
    try {
      await createProjectMutation({
        variables: {
          input,
        },
      });
    } catch (e) {
      console.error('Error creating project', e);
    }
  };

  return (
    <AddProjectContext.Provider
      value={{
        createProject,
        loading,
        error,
        data: data?.createProject,
      }}
    >
      {children}
    </AddProjectContext.Provider>
  );
};

export const useAddProject = () => {
  const context = useContext(AddProjectContext);
  if (!context) {
    throw new Error('useAddProject must be used within an AddProjectProvider');
  }
  return context;
};
