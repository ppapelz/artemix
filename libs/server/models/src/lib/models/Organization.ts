import { Entity, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, PrimaryGeneratedColumn, ManyToMany, OneToMany } from "typeorm";
import { ObjectType, Field, ID, InputType } from "type-graphql";
import { AccountEntity } from "./Account";
import { Project, ProjectEntity, ProjectType } from "./Project";


class Organization {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    projects: Project[];
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

    @OneToMany(() => ProjectEntity, project => project.organization)
    projects: ProjectEntity[];
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

    @Field(() => [ProjectType])
    projects: ProjectType[];
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
