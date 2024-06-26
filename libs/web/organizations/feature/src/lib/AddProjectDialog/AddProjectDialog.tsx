'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@artemix/web-shared-ui';
import { Project } from '@artemix/web/shared/util';
import { AddProjectForm } from '@artemix/organizations-ui';
import { useAddProject } from '@artemix/web/organizations/data-access';
import { useEffect } from 'react';

interface AddProjectProps {
  children: React.ReactNode;
  organizationId: string | undefined;
  addProject: (project: Project) => void;
}

export function AddProjectDialog({
  children,
  organizationId,
  addProject,
}: AddProjectProps) {
  const { loading, error, data, createProject } = useAddProject();

  const submitForm = (value: Project) => {
    const createProjectInput = {
      ...value,
      organizationId: organizationId as string,
    };
    createProject(createProjectInput);
  };

  useEffect(() => {
    if (data) {
      addProject(data);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log('error', error);
    }
  }, [error]);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-2">Add a new project</DialogTitle>
          <DialogDescription>
            <AddProjectForm loading={loading} submitForm={submitForm} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default AddProjectDialog;
