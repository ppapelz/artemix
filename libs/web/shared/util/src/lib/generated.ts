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

export type IAiModel = {
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

export type IAccountType = {
  displayName: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type ICreateAiModelInput = {
  aiConnectionToken: Scalars['String']['input'];
  frequencyPenalty: Scalars['Float']['input'];
  maxLength: Scalars['Int']['input'];
  modelType: Scalars['String']['input'];
  presencePenalty: Scalars['Float']['input'];
  promptId: Scalars['Int']['input'];
  stop: Scalars['String']['input'];
  temperature: Scalars['Float']['input'];
};

export type ICreateAccountInput = {
  displayName: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type ICreateOrganizationInput = {
  name: Scalars['String']['input'];
};

export type ICreateProjectInput = {
  description: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
};

export type ICreatePromptInput = {
  content: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type ICreateVariableInput = {
  contentLimit: InputMaybe<Scalars['Int']['input']>;
  defaultValue: InputMaybe<Scalars['String']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  name: Scalars['String']['input'];
  promptId: Scalars['Int']['input'];
  type: Scalars['String']['input'];
};

export type IFirstAccountReturnType = {
  accountId: Scalars['ID']['output'];
  orgId: Scalars['ID']['output'];
};

export type IMutation = {
  createAIModel: IAiModel;
  createAccount: IAccountType;
  createFirstAccount: IFirstAccountReturnType;
  createOrganization: IOrganizationType;
  createProject: IProjectType;
  createPrompt: IPrompt;
  createVariable: IVariable;
  deleteAIModel: Scalars['Boolean']['output'];
  deletePrompt: Scalars['Boolean']['output'];
  deleteVariable: Scalars['Boolean']['output'];
  updateAIModel: Maybe<IAiModel>;
  updatePrompt: Maybe<IPrompt>;
  updateVariable: Maybe<IVariable>;
};


export type IMutationCreateAiModelArgs = {
  input: ICreateAiModelInput;
};


export type IMutationCreateAccountArgs = {
  input: ICreateAccountInput;
};


export type IMutationCreateFirstAccountArgs = {
  input: ICreateAccountInput;
};


export type IMutationCreateOrganizationArgs = {
  input: ICreateOrganizationInput;
};


export type IMutationCreateProjectArgs = {
  input: ICreateProjectInput;
};


export type IMutationCreatePromptArgs = {
  input: ICreatePromptInput;
};


export type IMutationCreateVariableArgs = {
  input: ICreateVariableInput;
};


export type IMutationDeleteAiModelArgs = {
  id: Scalars['Int']['input'];
};


export type IMutationDeletePromptArgs = {
  id: Scalars['Int']['input'];
};


export type IMutationDeleteVariableArgs = {
  id: Scalars['Int']['input'];
};


export type IMutationUpdateAiModelArgs = {
  id: Scalars['Int']['input'];
  input: IUpdateAiModelInput;
};


export type IMutationUpdatePromptArgs = {
  id: Scalars['Int']['input'];
  input: IUpdatePromptInput;
};


export type IMutationUpdateVariableArgs = {
  id: Scalars['Int']['input'];
  input: IUpdateVariableInput;
};

export type IOrganizationType = {
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  projects: Array<IProjectType>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type IProjectType = {
  createdAt: Scalars['DateTimeISO']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type IPrompt = {
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type IQuery = {
  getAIModel: Maybe<IAiModel>;
  getAccount: Maybe<IAccountType>;
  getAllAIModels: Array<IAiModel>;
  getAllPrompts: Array<IPrompt>;
  getOrganization: Maybe<IOrganizationType>;
  getOrganizationsByAccountID: Maybe<Array<IOrganizationType>>;
  getProjectsByOrgID: Maybe<Array<IProjectType>>;
  getPrompt: Maybe<IPrompt>;
  getVariable: Maybe<IVariable>;
  getVariablesByPromptId: Array<IVariable>;
};


export type IQueryGetAiModelArgs = {
  id: Scalars['Int']['input'];
};


export type IQueryGetAccountArgs = {
  id: Scalars['ID']['input'];
};


export type IQueryGetOrganizationArgs = {
  id: Scalars['ID']['input'];
};


export type IQueryGetOrganizationsByAccountIdArgs = {
  id: Scalars['ID']['input'];
};


export type IQueryGetProjectsByOrgIdArgs = {
  id: Scalars['ID']['input'];
};


export type IQueryGetPromptArgs = {
  id: Scalars['Int']['input'];
};


export type IQueryGetVariableArgs = {
  id: Scalars['Int']['input'];
};


export type IQueryGetVariablesByPromptIdArgs = {
  promptId: Scalars['Int']['input'];
};

export type IUpdateAiModelInput = {
  aiConnectionToken: InputMaybe<Scalars['String']['input']>;
  frequencyPenalty: InputMaybe<Scalars['Float']['input']>;
  maxLength: InputMaybe<Scalars['Int']['input']>;
  modelType: InputMaybe<Scalars['String']['input']>;
  presencePenalty: InputMaybe<Scalars['Float']['input']>;
  promptId: InputMaybe<Scalars['Int']['input']>;
  stop: InputMaybe<Scalars['String']['input']>;
  temperature: InputMaybe<Scalars['Float']['input']>;
};

export type IUpdatePromptInput = {
  content: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
};

export type IUpdateVariableInput = {
  contentLimit: InputMaybe<Scalars['Int']['input']>;
  defaultValue: InputMaybe<Scalars['String']['input']>;
  description: InputMaybe<Scalars['String']['input']>;
  label: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  promptId: InputMaybe<Scalars['Int']['input']>;
  type: InputMaybe<Scalars['String']['input']>;
};

export type IVariable = {
  contentLimit: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  defaultValue: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  name: Scalars['String']['output'];
  promptId: Scalars['Int']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type ICreateProjectMutationVariables = Exact<{
  input: ICreateProjectInput;
}>;


export type ICreateProjectMutation = { createProject: { id: string, name: string, description: string | null } };

export type IGetAccountOrgsQueryVariables = Exact<{
  accountId: Scalars['ID']['input'];
}>;


export type IGetAccountOrgsQuery = { getOrganizationsByAccountID: Array<{ id: string, name: string, projects: Array<{ id: string, name: string, description: string | null }> }> | null };

export type IGetProjectsByOrgIdQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
}>;


export type IGetProjectsByOrgIdQuery = { getProjectsByOrgID: Array<{ name: string, description: string | null, id: string }> | null };


export const CreateProjectDocument = gql`
    mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
    id
    name
    description
  }
}
    `;
export type ICreateProjectMutationFn = Apollo.MutationFunction<ICreateProjectMutation, ICreateProjectMutationVariables>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProjectMutation(baseOptions?: Apollo.MutationHookOptions<ICreateProjectMutation, ICreateProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ICreateProjectMutation, ICreateProjectMutationVariables>(CreateProjectDocument, options);
      }
export type CreateProjectMutationHookResult = ReturnType<typeof useCreateProjectMutation>;
export type CreateProjectMutationResult = Apollo.MutationResult<ICreateProjectMutation>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<ICreateProjectMutation, ICreateProjectMutationVariables>;
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
export function useGetAccountOrgsQuery(baseOptions: Apollo.QueryHookOptions<IGetAccountOrgsQuery, IGetAccountOrgsQueryVariables> & ({ variables: IGetAccountOrgsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IGetAccountOrgsQuery, IGetAccountOrgsQueryVariables>(GetAccountOrgsDocument, options);
      }
export function useGetAccountOrgsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IGetAccountOrgsQuery, IGetAccountOrgsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IGetAccountOrgsQuery, IGetAccountOrgsQueryVariables>(GetAccountOrgsDocument, options);
        }
export function useGetAccountOrgsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IGetAccountOrgsQuery, IGetAccountOrgsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IGetAccountOrgsQuery, IGetAccountOrgsQueryVariables>(GetAccountOrgsDocument, options);
        }
export type GetAccountOrgsQueryHookResult = ReturnType<typeof useGetAccountOrgsQuery>;
export type GetAccountOrgsLazyQueryHookResult = ReturnType<typeof useGetAccountOrgsLazyQuery>;
export type GetAccountOrgsSuspenseQueryHookResult = ReturnType<typeof useGetAccountOrgsSuspenseQuery>;
export type GetAccountOrgsQueryResult = Apollo.QueryResult<IGetAccountOrgsQuery, IGetAccountOrgsQueryVariables>;
export const GetProjectsByOrgIdDocument = gql`
    query GetProjectsByOrgId($organizationId: ID!) {
  getProjectsByOrgID(id: $organizationId) {
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
 *      organizationId: // value for 'organizationId'
 *   },
 * });
 */
export function useGetProjectsByOrgIdQuery(baseOptions: Apollo.QueryHookOptions<IGetProjectsByOrgIdQuery, IGetProjectsByOrgIdQueryVariables> & ({ variables: IGetProjectsByOrgIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IGetProjectsByOrgIdQuery, IGetProjectsByOrgIdQueryVariables>(GetProjectsByOrgIdDocument, options);
      }
export function useGetProjectsByOrgIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IGetProjectsByOrgIdQuery, IGetProjectsByOrgIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IGetProjectsByOrgIdQuery, IGetProjectsByOrgIdQueryVariables>(GetProjectsByOrgIdDocument, options);
        }
export function useGetProjectsByOrgIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IGetProjectsByOrgIdQuery, IGetProjectsByOrgIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IGetProjectsByOrgIdQuery, IGetProjectsByOrgIdQueryVariables>(GetProjectsByOrgIdDocument, options);
        }
export type GetProjectsByOrgIdQueryHookResult = ReturnType<typeof useGetProjectsByOrgIdQuery>;
export type GetProjectsByOrgIdLazyQueryHookResult = ReturnType<typeof useGetProjectsByOrgIdLazyQuery>;
export type GetProjectsByOrgIdSuspenseQueryHookResult = ReturnType<typeof useGetProjectsByOrgIdSuspenseQuery>;
export type GetProjectsByOrgIdQueryResult = Apollo.QueryResult<IGetProjectsByOrgIdQuery, IGetProjectsByOrgIdQueryVariables>;