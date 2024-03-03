import { Entity, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { ObjectType, Field, ID, InputType } from "type-graphql";
import { Account } from "./Account";

@ObjectType()
@Entity("Organization")
export class Organization extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

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
    @ManyToMany(() => Account, account => account.organizations)
    accounts: Account[];
}

@InputType()
export class CreateOrganizationInput {
    @Field(() => String)
    name: string;
}

@InputType()
export class UpdateOrganizationInput {
    @Field(() => Number)
    id: number;

    @Field(() => String)
    name?: string;
}