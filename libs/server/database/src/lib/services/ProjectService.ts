
import { CreateProjectInput, Project, ProjectEntity } from '@artemix/server/models';
import ProjectRepository from '../repositories/ProjectRepository';
import { organizationService } from './OrganizationService';

class ProjectService {

    async getProjectById(id: number): Promise<ProjectEntity | null> {
        return await ProjectRepository.findById(id);
    }

    async getProjectsByOrgID(id: string): Promise<Project[] | null> {
        return await ProjectRepository.findByOrgID(id);
    }

    async createProject(data: CreateProjectInput): Promise<ProjectEntity> {
        const organization = await organizationService.getOrganizationById(data.organizationId);
        if (!organization) {
            throw new Error('Organization not found');
        }

        return await ProjectRepository.create(
            {
                ...data,
                organization,
            }
        );
    }
}

export const projectService = new ProjectService();
