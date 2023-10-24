import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";
import { ObjectType, Field, ID, Float, Int } from "type-graphql";
import { Prompt } from "./Prompt";

@ObjectType() // TypeGraphQL için tanımlama
@Entity("AIModels") // TypeORM için tanımlama
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
