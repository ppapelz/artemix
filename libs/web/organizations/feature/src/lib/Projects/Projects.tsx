'use client';

import { Card } from '@artemix/web-shared-ui';
import AddProject from '../AddProject/AddProject';
import { useOrganization } from '@artemix/web/organizations/data-access';

export interface ProjectsProps {
  // data: GetAccountOrgsQuery['getOrganizationsByAccountID'];
  data: any;
}

export function Projects({ data }: ProjectsProps) {
  const { organization } = useOrganization();
  return (
    <div className="flex flex-col">
      <div className="flex justify-end w-auto mb-4">
        <AddProject />
      </div>

      <div className="flex space-x-3">
        {data?.map((project: any) => {
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
