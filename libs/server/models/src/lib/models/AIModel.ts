import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";
import { ObjectType, Field, ID, Float, Int, InputType } from "type-graphql";
import { Prompt } from "./Prompt";

@ObjectType()
@Entity("AIModels")
export class AIModel extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column("text")
    modelType: string;

    @Field(() => String)
    @Column("text")
    aiConnectionToken: string;

    @Field(() => Float)
    @Column("float")
    temperature: number;

    @Field(() => Int)
    @Column("int")
    maxLength: number;

    @Field(() => String)
    @Column("text")
    stop: string;

    @Field(() => Float)
    @Column("float")
    presencePenalty: number;

    @Field(() => Float)
    @Column("float")
    frequencyPenalty: number;

    @Field(() => Int)
    @Column("int")
    promptId: number;

    @Field(() => Date)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => Date)
    @UpdateDateColumn()
    updatedAt: Date;

    // Relations
    @ManyToOne(() => Prompt, prompt => prompt.aiModel)
    prompt: Prompt;
}

@InputType()
export class CreateAIModelInput {
    @Field(() => String)
    modelType: string;

    @Field(() => String)
    aiConnectionToken: string;

    @Field(() => Float)
    temperature: number;

    @Field(() => Int)
    maxLength: number;

    @Field(() => String)
    stop: string;

    @Field(() => Float)
    presencePenalty: number;

    @Field(() => Float)
    frequencyPenalty: number;

    @Field(() => Int)
    promptId: number;
}

@InputType()
export class UpdateAIModelInput {
    @Field(() => String, { nullable: true })
    modelType?: string;

    @Field(() => String, { nullable: true })
    aiConnectionToken?: string;

    @Field(() => Float, { nullable: true })
    temperature?: number;

    @Field(() => Int, { nullable: true })
    maxLength?: number;

    @Field(() => String, { nullable: true })
    stop?: string;

    @Field(() => Float, { nullable: true })
    presencePenalty?: number;

    @Field(() => Float, { nullable: true })
    frequencyPenalty?: number;

    @Field(() => Int, { nullable: true })
    promptId?: number;
}