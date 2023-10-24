import { aiModelService } from '@promptus/server/database';
import { AIModel, CreateAIModelInput, UpdateAIModelInput } from '@promptus/server/models';
import { Resolver, Query, Arg, Mutation, Int } from 'type-graphql';

@Resolver(AIModel)
export class AIModelResolver {

    @Query(() => AIModel, { nullable: true })
    async getAIModel(@Arg("id", () => Int) id: number): Promise<AIModel | undefined> {
        return await aiModelService.getAIModelById(id);
    }

    @Query(() => [AIModel])
    async getAllAIModels(): Promise<AIModel[]> {
        return await aiModelService.getAllAIModels();
    }

    @Mutation(() => AIModel)
    async createAIModel(@Arg("input", () => CreateAIModelInput) input: CreateAIModelInput): Promise<AIModel> {
        return await aiModelService.createAIModel(input);
    }

    @Mutation(() => AIModel, { nullable: true })
    async updateAIModel(
        @Arg("id", () => Int) id: number,
        @Arg("input", () => UpdateAIModelInput) input: UpdateAIModelInput
    ): Promise<number | null> {
        return await aiModelService.updateAIModel(id, input);
    }

    @Mutation(() => Boolean)
    async deleteAIModel(@Arg("id", () => Int) id: number): Promise<boolean> {
        return await aiModelService.deleteAIModel(id);
    }
}
