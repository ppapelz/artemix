import { Resolver, Query, Mutation, Arg, Int } from 'type-graphql';
import {
  CreateVariableInput,
  UpdateVariableInput,
  Variable,
} from '@promptus/server/models';
import { variableService } from '@promptus/server/database';

@Resolver(Variable)
export class VariableResolver {
  @Query(() => Variable, { nullable: true })
  async getVariable(
    @Arg('id', () => Int) id: number
  ): Promise<Variable | undefined> {
    return await variableService.getVariableById(id);
  }

  @Query(() => [Variable])
  async getVariablesByPromptId(
    @Arg('promptId', () => Int) promptId: number
  ): Promise<Variable[]> {
    return await variableService.getVariablesByPromptId(promptId);
  }

  @Mutation(() => Variable)
  async createVariable(
    @Arg('input', () => CreateVariableInput) input: CreateVariableInput
  ): Promise<Variable> {
    return await variableService.createVariable(input);
  }

  @Mutation(() => Variable, { nullable: true })
  async updateVariable(
    @Arg('id', () => Int) id: number,
    @Arg('input', () => UpdateVariableInput) input: UpdateVariableInput
  ): Promise<number | null> {
    return await variableService.updateVariable(id, input);
  }

  @Mutation(() => Boolean)
  async deleteVariable(@Arg('id', () => Int) id: number): Promise<boolean> {
    return await variableService.deleteVariable(id);
  }
}
