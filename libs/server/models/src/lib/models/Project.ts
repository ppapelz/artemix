import { Entity, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, PrimaryColumn, ManyToMany, JoinTable, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { ObjectType, Field, ID, InputType } from "type-graphql";
import { OrganizationEntity } from "./Organization";


class Project {
    id: string;
    name: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}

@Entity("Project")
class ProjectEntity extends BaseEntity implements Project {
    @PrimaryGeneratedColumn()
    id: string;

    @Column("text")
    name: string;

    @Column("text", { nullable: true })
    description?: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    // Relations
    @ManyToOne(() => OrganizationEntity, organization => organization.projects)
    organization: OrganizationEntity;
}

@ObjectType()
class ProjectType implements Project {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    name: string;

    @Field(() => String)
    description?: string;

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date)
    updatedAt: Date;
}

@InputType()
class CreateProjectInput {
    @Field(() => String)
    name: string;
    @Field(() => String, { nullable: true })
    description?: string;
    @Field(() => ID)
    organizationId: string;
}

@InputType()
class UpdateProjectInput {
    @Field(() => ID)
    id: string;

    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => String, { nullable: true })
    description?: string;
}


export {
    Project,
    ProjectEntity,
    ProjectType,
    CreateProjectInput,
    UpdateProjectInput
}
