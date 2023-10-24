import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { ObjectType, Field, ID, Int } from "type-graphql";
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
