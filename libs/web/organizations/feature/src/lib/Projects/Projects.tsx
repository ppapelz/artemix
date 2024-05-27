'use client';

import { Card } from '@artemix/web-shared-ui';
import AddProject from '../AddProject/AddProject';
import { useSeletedOrganization } from '@artemix/web-organizations-data-access';

export function Projects() {
  const { projects } = useSeletedOrganization();

  return (
    <div className="flex flex-col">
      <div className="flex justify-end w-auto mb-4">
        <AddProject />
      </div>

      <div className="flex space-x-3">
        {projects?.map((project) => {
          return (
            <Card key={project.id} className="py-8 px-8">
              {project.name}
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
