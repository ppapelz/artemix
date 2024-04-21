import { projectService } from '@promptus/server/database';
import {
    CreateProjectInput,
    ProjectType,
} from '@promptus/server/models';
import { Resolver, Arg, Mutation, Query, ID } from 'type-graphql';

@Resolver(ProjectType)
export class ProjectResolver {

    @Mutation(() => ProjectType)
    async createProject(
        @Arg('input', () => CreateProjectInput) input: CreateProjectInput
    ): Promise<ProjectType> {
        return await projectService.createProject(input);
    }

    @Query(() => [ProjectType], { nullable: true })
    async getProjectsByOrgID(@Arg('id', () => ID) id: string): Promise<ProjectType[] | null> {
        return await projectService.getProjectsByOrgID(id);
    }
}