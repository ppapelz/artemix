'use client';

import { useSeletedOrganization } from '@artemix/web-shared-data-access';
import { PlusCircle } from 'lucide-react';
import { ProjectCard } from '@artemix/organizations-ui/server';
import { AddProjectDialog } from '../AddProjectDialog/AddProjectDialog';
import { AddProjectProvider } from '@artemix/web-organizations-data-access';

export function Projects() {
  const { projects, selectedOrganization } = useSeletedOrganization();

  return (
    <div className="flex flex-col">
      <div className="flex space-x-3">
        {projects?.map((project) => {
          return (
            <button key={project.id} onClick={() => console.log(project.id)}>
              <ProjectCard>{project.name}</ProjectCard>
            </button>
          );
        })}
        <AddProjectProvider>
          <AddProjectDialog organizationId={selectedOrganization?.id}>
            <button>
              <ProjectCard>
                <PlusCircle className="mr-2" />
                <span>Add Project</span>
              </ProjectCard>
            </button>
          </AddProjectDialog>
        </AddProjectProvider>
      </div>
    </div>
  );
}

export default Projects;
