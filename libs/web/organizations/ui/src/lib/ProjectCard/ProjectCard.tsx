import { Card } from '@artemix/web-shared-ui';
import React, { ReactNode } from 'react';

interface ProjectCardProps {
  children: ReactNode;
  selected?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  children,
  selected = false,
}) => {
  return (
    <Card
      className={`py-8 px-8 flex flex-row justify-center items-center min-w-project-card max-w-project-card cursor-pointer transition-transform duration-300 truncate ${
        selected ? 'bg-secondary' : 'hover:bg-secondary'
      }`}
    >
      {children}
    </Card>
  );
};

export default ProjectCard;
