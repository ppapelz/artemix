import { Entity, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";
import { ObjectType, Field, ID, InputType } from "type-graphql";
import { OrganizationEntity } from "./Organization";

class Account {
    id: string;
    displayName?: string;
    email: string;
}

@Entity("Account")
class AccountEntity extends BaseEntity implements Account {
    @PrimaryColumn('text')
    id: string;

    @Column("text")
    displayName?: string;

    @Column("text")
    email: string;

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

    // Relations
    @ManyToMany(() => OrganizationEntity, organization => organization.accounts)
    @JoinTable()
    organizations?: OrganizationEntity[];
}

@ObjectType()
class AccountType implements Account {
    @Field(() => ID)
    id: string;

    @Field(() => String, { nullable: true })
    displayName?: string;

    @Field(() => String)
    email: string;
}

@InputType()
class CreateAccountInput {
    @Field(() => ID)
    id: string;

    @Field(() => String, { nullable: true })
    displayName?: string;

    @Field(() => String)
    email: string;
}

@InputType()
class UpdateAccountInput {
    @Field(() => ID)
    id: string;

    @Field(() => String, { nullable: true })
    displayName?: string;

    @Field(() => String, { nullable: true })
    email?: string;
}


export {
    Account,
    AccountEntity,
    AccountType,
    CreateAccountInput,
    UpdateAccountInput
}
