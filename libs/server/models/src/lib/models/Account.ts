import { Entity, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";
import { ObjectType, Field, ID, InputType } from "type-graphql";
import { Organization } from "./Organization";

@ObjectType()
@Entity("Account")
export class Account extends BaseEntity {
    @Field(() => ID)
    @PrimaryColumn('text')
    id: string;

    @Field(() => String)
    @Column("text")
    displayName?: string;

    @Field(() => String)
    @Column("text")
    email: string;

    @Field(() => Date)
    @CreateDateColumn()
    createdAt?: Date;

    @Field(() => Date)
    @UpdateDateColumn()
    updatedAt?: Date;

    // Relations
    @ManyToMany(() => Organization, organization => organization.accounts)
    @JoinTable()
    organizations?: Organization[];
}

@InputType()
export class CreateAccountInput {
    @Field(() => ID)
    id: string;

    @Field(() => String, { nullable: true })
    displayName?: string;

    @Field(() => String)
    email: string;
}

@InputType()
export class UpdateAccountInput {
    @Field(() => ID)
    id: string;

    @Field(() => String, { nullable: true })
    displayName?: string;

    @Field(() => String, { nullable: true })
    email?: string;
}