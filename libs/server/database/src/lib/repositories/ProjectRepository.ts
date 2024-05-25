import { BaseRepository } from './BaseRepository';
import { Project, ProjectEntity } from '@artemix/server/models';

class ProjectRepository extends BaseRepository<ProjectEntity> {
    constructor() {
        super(ProjectEntity);
    }

    async findByOrgID(orgID: string): Promise<Project[] | null> {
        const projects = await this.repository
            .createQueryBuilder('project')
            .leftJoinAndSelect('project.organization', 'organization')
            .where('organization.id = :orgID', { orgID })
            .getMany();

        return projects.length > 0 ? projects : null;
    }
}
export default new ProjectRepository();
