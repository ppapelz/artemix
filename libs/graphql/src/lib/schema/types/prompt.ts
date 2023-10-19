import gql from 'graphql-tag';

export const PromptType = gql`
  type Prompt {
    id: Int!
    content: String!
    name: String!
    createdAt: String!
    updatedAt: String!
  }

  input CreatePromptInput {
    content: String!
    name: String!
  }

  input UpdatePromptInput {
    content: String
    name: String
  }

  type Query {
    getAllPrompts: [Prompt!]
    getPrompt(id: Int!): Prompt
  }

  type Mutation {
    createPrompt(input: CreatePromptInput!): Prompt!
    updatePrompt(id: Int!, input: UpdatePromptInput!): Prompt
    deletePrompt(id: Int!): Boolean
  }
`;