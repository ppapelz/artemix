import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export type AiModel = {
  __typename?: 'AIModel';
  aiConnectionToken: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  frequencyPenalty: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  maxLength: Scalars['Int']['output'];
  modelType: Scalars['String']['output'];
  presencePenalty: Scalars['Float']['output'];
  promptId: Scalars['Int']['output'];
  stop: Scalars['String']['output'];
  temperature: Scalars['Float']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type AccountType = {
  __typename?: 'AccountType';
  displayName?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type CreateAiModelInput = {
  aiConnectionToken: Scalars['String']['input'];
  frequencyPenalty: Scalars['Float']['input'];
  maxLength: Scalars['Int']['input'];
  modelType: Scalars['String']['input'];
  presencePenalty: Scalars['Float']['input'];
  promptId: Scalars['Int']['input'];
  stop: Scalars['String']['input'];
  temperature: Scalars['Float']['input'];
};

export type CreateAccountInput = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type CreateOrganizationInput = {
  name: Scalars['String']['input'];
};

export type CreateProjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
};

export type CreatePromptInput = {
  content: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateVariableInput = {
  contentLimit?: InputMaybe<Scalars['Int']['input']>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  name: Scalars['String']['input'];
  promptId: Scalars['Int']['input'];
  type: Scalars['String']['input'];
};

export type FirstAccountReturnType = {
  __typename?: 'FirstAccountReturnType';
  accountId: Scalars['ID']['output'];
  orgId: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAIModel: AiModel;
  createAccount: AccountType;
  createFirstAccount: FirstAccountReturnType;
  createOrganization: OrganizationType;
  createProject: ProjectType;
  createPrompt: Prompt;
  createVariable: Variable;
  deleteAIModel: Scalars['Boolean']['output'];
  deletePrompt: Scalars['Boolean']['output'];
  deleteVariable: Scalars['Boolean']['output'];
  updateAIModel?: Maybe<AiModel>;
  updatePrompt?: Maybe<Prompt>;
  updateVariable?: Maybe<Variable>;
};


export type MutationCreateAiModelArgs = {
  input: CreateAiModelInput;
};


export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};


export type MutationCreateFirstAccountArgs = {
  input: CreateAccountInput;
};


export type MutationCreateOrganizationArgs = {
  input: CreateOrganizationInput;
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationCreatePromptArgs = {
  input: CreatePromptInput;
};


export type MutationCreateVariableArgs = {
  input: CreateVariableInput;
};


export type MutationDeleteAiModelArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePromptArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteVariableArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateAiModelArgs = {
  id: Scalars['Int']['input'];
  input: UpdateAiModelInput;
};


export type MutationUpdatePromptArgs = {
  id: Scalars['Int']['input'];
  input: UpdatePromptInput;
};


export type MutationUpdateVariableArgs = {
  id: Scalars['Int']['input'];
  input: UpdateVariableInput;
};

export type OrganizationType = {
  __typename?: 'OrganizationType';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  projects: Array<ProjectType>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type ProjectType = {
  __typename?: 'ProjectType';
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type Prompt = {
  __typename?: 'Prompt';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAIModel?: Maybe<AiModel>;
  getAccount?: Maybe<AccountType>;
  getAllAIModels: Array<AiModel>;
  getAllPrompts: Array<Prompt>;
  getOrganization?: Maybe<OrganizationType>;
  getOrganizationsByAccountID?: Maybe<Array<OrganizationType>>;
  getProjectsByOrgID?: Maybe<Array<ProjectType>>;
  getPrompt?: Maybe<Prompt>;
  getVariable?: Maybe<Variable>;
  getVariablesByPromptId: Array<Variable>;
};


export type QueryGetAiModelArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetAccountArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetOrganizationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetOrganizationsByAccountIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetProjectsByOrgIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetPromptArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetVariableArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetVariablesByPromptIdArgs = {
  promptId: Scalars['Int']['input'];
};

export type UpdateAiModelInput = {
  aiConnectionToken?: InputMaybe<Scalars['String']['input']>;
  frequencyPenalty?: InputMaybe<Scalars['Float']['input']>;
  maxLength?: InputMaybe<Scalars['Int']['input']>;
  modelType?: InputMaybe<Scalars['String']['input']>;
  presencePenalty?: InputMaybe<Scalars['Float']['input']>;
  promptId?: InputMaybe<Scalars['Int']['input']>;
  stop?: InputMaybe<Scalars['String']['input']>;
  temperature?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdatePromptInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateVariableInput = {
  contentLimit?: InputMaybe<Scalars['Int']['input']>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  promptId?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Variable = {
  __typename?: 'Variable';
  contentLimit?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  defaultValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  name: Scalars['String']['output'];
  promptId: Scalars['Int']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type GetAccountOrgsQueryVariables = Exact<{
  accountId: Scalars['ID']['input'];
}>;


export type GetAccountOrgsQuery = { __typename?: 'Query', getOrganizationsByAccountID?: Array<{ __typename?: 'OrganizationType', id: string, name: string, projects: Array<{ __typename?: 'ProjectType', id: string, name: string, description?: string | null }> }> | null };

export type GetProjectsByOrgIdQueryVariables = Exact<{
  orgId: Scalars['ID']['input'];
}>;


export type GetProjectsByOrgIdQuery = { __typename?: 'Query', getProjectsByOrgID?: Array<{ __typename?: 'ProjectType', name: string, description?: string | null, id: string }> | null };


export const GetAccountOrgsDocument = gql`
    query GetAccountOrgs($accountId: ID!) {
  getOrganizationsByAccountID(id: $accountId) {
    id
    name
    projects {
      id
      name
      description
    }
  }
}
    `;

/**
 * __useGetAccountOrgsQuery__
 *
 * To run a query within a React component, call `useGetAccountOrgsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountOrgsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountOrgsQuery({
 *   variables: {
 *      accountId: // value for 'accountId'
 *   },
 * });
 */
export function useGetAccountOrgsQuery(baseOptions: Apollo.QueryHookOptions<GetAccountOrgsQuery, GetAccountOrgsQueryVariables> & ({ variables: GetAccountOrgsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAccountOrgsQuery, GetAccountOrgsQueryVariables>(GetAccountOrgsDocument, options);
      }
export function useGetAccountOrgsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAccountOrgsQuery, GetAccountOrgsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAccountOrgsQuery, GetAccountOrgsQueryVariables>(GetAccountOrgsDocument, options);
        }
export function useGetAccountOrgsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAccountOrgsQuery, GetAccountOrgsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAccountOrgsQuery, GetAccountOrgsQueryVariables>(GetAccountOrgsDocument, options);
        }
export type GetAccountOrgsQueryHookResult = ReturnType<typeof useGetAccountOrgsQuery>;
export type GetAccountOrgsLazyQueryHookResult = ReturnType<typeof useGetAccountOrgsLazyQuery>;
export type GetAccountOrgsSuspenseQueryHookResult = ReturnType<typeof useGetAccountOrgsSuspenseQuery>;
export type GetAccountOrgsQueryResult = Apollo.QueryResult<GetAccountOrgsQuery, GetAccountOrgsQueryVariables>;
export const GetProjectsByOrgIdDocument = gql`
    query GetProjectsByOrgId($orgId: ID!) {
  getProjectsByOrgID(id: $orgId) {
    name
    description
    id
  }
}
    `;

/**
 * __useGetProjectsByOrgIdQuery__
 *
 * To run a query within a React component, call `useGetProjectsByOrgIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectsByOrgIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectsByOrgIdQuery({
 *   variables: {
 *      orgId: // value for 'orgId'
 *   },
 * });
 */
export function useGetProjectsByOrgIdQuery(baseOptions: Apollo.QueryHookOptions<GetProjectsByOrgIdQuery, GetProjectsByOrgIdQueryVariables> & ({ variables: GetProjectsByOrgIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectsByOrgIdQuery, GetProjectsByOrgIdQueryVariables>(GetProjectsByOrgIdDocument, options);
      }
export function useGetProjectsByOrgIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectsByOrgIdQuery, GetProjectsByOrgIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectsByOrgIdQuery, GetProjectsByOrgIdQueryVariables>(GetProjectsByOrgIdDocument, options);
        }
export function useGetProjectsByOrgIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProjectsByOrgIdQuery, GetProjectsByOrgIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProjectsByOrgIdQuery, GetProjectsByOrgIdQueryVariables>(GetProjectsByOrgIdDocument, options);
        }
export type GetProjectsByOrgIdQueryHookResult = ReturnType<typeof useGetProjectsByOrgIdQuery>;
export type GetProjectsByOrgIdLazyQueryHookResult = ReturnType<typeof useGetProjectsByOrgIdLazyQuery>;
export type GetProjectsByOrgIdSuspenseQueryHookResult = ReturnType<typeof useGetProjectsByOrgIdSuspenseQuery>;
export type GetProjectsByOrgIdQueryResult = Apollo.QueryResult<GetProjectsByOrgIdQuery, GetProjectsByOrgIdQueryVariables>;