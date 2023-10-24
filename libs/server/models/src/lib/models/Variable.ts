import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { ObjectType, Field, ID, Int, InputType } from "type-graphql";
import { Prompt } from "./Prompt";

@ObjectType()
@Entity("Variables")
export class Variable extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => Int)
    @Column("int")
    promptId: number;

    @Field(() => String)
    @Column("text")
    label: string;

    @Field(() => String)
    @Column("text")
    type: string;

    @Field(() => String)
    @Column("text")
    name: string;

    @Field(() => String, { nullable: true })
    @Column({ type: "text", nullable: true })
    description?: string;

    @Field(() => String, { nullable: true })
    @Column({ type: "text", nullable: true })
    defaultValue?: string;

    @Field(() => Int, { nullable: true })
    @Column({ type: "int", nullable: true })
    contentLimit?: number;

    @Field(() => Date)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => Date)
    @UpdateDateColumn()
    updatedAt: Date;

    // Relations
    @ManyToOne(() => Prompt, prompt => prompt.id)
    prompt: Prompt;
}

@InputType()
export class CreateVariableInput {

    @Field(() => Int)
    promptId: number;

    @Field(() => String)
    label: string;

    @Field(() => String)
    type: string;

    @Field(() => String)
    name: string;

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => String, { nullable: true })
    defaultValue?: string;

    @Field(() => Int, { nullable: true })
    contentLimit?: number;

}

@InputType()
export class UpdateVariableInput {

    @Field(() => Int, { nullable: true })
    promptId?: number;

    @Field(() => String,{ nullable: true })
    label?: string;

    @Field(() => String,{ nullable: true })
    type?: string;

    @Field(() => String,{ nullable: true })
    name?: string;

    @Field(() => String,{ nullable: true })
    description?: string;

    @Field(() => String,{ nullable: true })
    defaultValue?: string;

    @Field(() => Int,{ nullable: true })
    contentLimit?: number;

}