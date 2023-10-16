import gql from 'graphql-tag';

export const PromptType = gql`
  type Prompt {
    id: Int!
    content: String!
    name: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    getAllPrompts: [Prompt!]!
    getPrompt(id: Int!): Prompt
  }
`;