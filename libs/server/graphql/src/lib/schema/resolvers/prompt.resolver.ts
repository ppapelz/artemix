import { Resolver, Query, Mutation, Arg, Int } from 'type-graphql';
import { promptService } from '@promptus/server/database';
import {
  CreatePromptInput,
  Prompt,
  UpdatePromptInput,
} from '@promptus/server/models';

@Resolver(Prompt)
export class PromptResolver {
  @Query(() => Prompt, { nullable: true })
  async getPrompt(@Arg('id', () => Int) id: number) {
    return await promptService.getPromptById(id);
  }

  @Query(() => [Prompt])
  async getAllPrompts() {
    return await promptService.getAllPrompts();
  }

  @Mutation(() => Prompt)
  async createPrompt(
    @Arg('input', () => CreatePromptInput) input: CreatePromptInput
  ) {
    return await promptService.createPrompt(input);
  }

  @Mutation(() => Prompt, { nullable: true })
  async updatePrompt(
    @Arg('id', () => Int) id: number,
    @Arg('input', () => UpdatePromptInput) input: UpdatePromptInput
  ) {
    return await promptService.updatePrompt(id, input);
  }

  @Mutation(() => Boolean)
  async deletePrompt(@Arg('id', () => Int) id: number) {
    return await promptService.deletePrompt(id);
  }
}
