import { IGetAccountOrgsQuery, IGetProjectsByOrgIdQuery } from './generated';

export type Organization = NonNullable<IGetAccountOrgsQuery['getOrganizationsByAccountID']>[number];
export type Project = NonNullable<IGetProjectsByOrgIdQuery['getProjectsByOrgID']>[number];