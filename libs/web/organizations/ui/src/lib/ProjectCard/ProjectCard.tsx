import { Card } from '@artemix/web-shared-ui';
import React, { ReactNode } from 'react';

interface ProjectCardProps {
  children: ReactNode;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ children }) => {
  return (
    <Card className="py-8 px-8 flex flex-row justify-center items-center min-w-project-card max-w-project-card cursor-pointer hover:bg-secondary transition-transform duration-300 truncate">
      {children}
    </Card>
  );
};

export default ProjectCard;
