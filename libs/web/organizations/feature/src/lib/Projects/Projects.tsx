'use client';

import { useSeletedOrganization } from '@artemix/web-shared-data-access';
import { PlusCircle } from 'lucide-react';
import { ProjectCard } from '@artemix/organizations-ui/server';
import { AddProjectDialog } from '../AddProjectDialog/AddProjectDialog';
import { AddProjectProvider } from '@artemix/web-organizations-data-access';
import { useEffect, useState } from 'react';
import { Project } from '@artemix/web/shared/util';

export function Projects() {
  const { selectedOrganization, updateSelectedProject, selectedProject } =
    useSeletedOrganization();
  const [projectList, setProjectList] = useState(
    selectedOrganization?.projects
  );

  useEffect(() => {
    setProjectList(selectedOrganization?.projects);
  }, [selectedOrganization]);

  const addProject = (project: Project) => {
    if (projectList) {
      setProjectList([...projectList, project]);
    }
  };

  const setSelectedProject = (project: Project) => {
    updateSelectedProject(selectedOrganization?.id as string, project);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-3">
        {projectList?.map((project) => {
          return (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
            >
              <ProjectCard selected={selectedProject?.id === project.id}>
                {project.name}
              </ProjectCard>
            </button>
          );
        })}
        <AddProjectProvider>
          <AddProjectDialog
            addProject={addProject}
            organizationId={selectedOrganization?.id}
          >
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
