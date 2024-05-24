'use client';

import { Card } from '@promptus/web-shared-ui';
import AddProject from '../AddProject/AddProject';
import { useOrganization } from '@promptus/web/organizations/data-access';

export function Projects() {
  const { organization } = useOrganization();
  console.log('project', organization);
  return (
    <div className="flex flex-col">
      <div className="flex justify-end w-auto mb-4">
        <AddProject />
      </div>
      <div className="flex space-x-3">
        <Card className="py-8 px-8">Project 1</Card>
        <Card className="py-8 px-8">Project 2</Card>
      </div>
    </div>
  );
}

export default Projects;
