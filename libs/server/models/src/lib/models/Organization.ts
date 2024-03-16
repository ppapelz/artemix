import { Entity, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { ObjectType, Field, ID, InputType } from "type-graphql";
import { AccountEntity } from "./Account";

class Organization {
    id: string;
    name: string;
}

@Entity("Organization")
class OrganizationEntity extends BaseEntity implements Organization {
    @PrimaryGeneratedColumn()
    id: string;

    @Column("text")
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    // Relations
    @ManyToMany(() => AccountEntity, account => account.organizations)
    accounts: AccountEntity[];
}

@ObjectType()
class OrganizationType implements Organization {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    name: string;

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date)
    updatedAt: Date;
}

@InputType()
class CreateOrganizationInput {
    @Field(() => String)
    name: string;
}

@InputType()
class UpdateOrganizationInput {
    @Field(() => ID)
    id: string;

    @Field(() => String, { nullable: true })
    name?: string;
}

export {
    Organization,
    OrganizationEntity,
    OrganizationType,
    CreateOrganizationInput,
    UpdateOrganizationInput
}
