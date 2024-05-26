import { IGetAccountOrgsQuery } from './generated';

export type Organization = NonNullable<IGetAccountOrgsQuery['getOrganizationsByAccountID']>[number];