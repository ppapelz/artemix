import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToOne, OneToMany } from "typeorm";
import { ObjectType, Field, ID, InputType } from "type-graphql";
import { AIModel } from "./AIModel";
import { Variable } from "./Variable";

@ObjectType()
@Entity("Prompts")
export class Prompt extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column("text")
    content: string;

    @Field(() => String)
    @Column("text")
    name: string;

    @Field(() => Date)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => Date)
    @UpdateDateColumn()
    updatedAt: Date;

    // Relations
    @OneToOne(() => AIModel, aiModel => aiModel.prompt)
    aiModel: AIModel;

    @OneToMany(() => Variable, variable => variable.prompt)
    variables: Variable[];
}

@InputType()
export class CreatePromptInput {
    @Field(() => String)
    content: string;

    @Field(() => String)
    name: string;
}

@InputType()
export class UpdatePromptInput {
    @Field(() => String, { nullable: true })
    content?: string;

    @Field(() => String, { nullable: true })
    name?: string;
}