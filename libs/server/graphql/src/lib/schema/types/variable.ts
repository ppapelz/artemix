import gql from 'graphql-tag';

export const VariableType = gql`
  type Variable {
    id: Int!
    promptId: Int!
    label: String!
    type: String!
    name: String!
    description: String
    defaultValue: String
    contentLimit: Int
  }

  input CreateVariableInput {
    promptId: Int!
    label: String!
    type: String!
    name: String!
    description: String
    defaultValue: String
    contentLimit: Int
  }

  input UpdateVariableInput {
    promptId: Int
    label: String
    type: String
    name: String
    description: String
    defaultValue: String
    contentLimit: Int
  }

  extend type Query {
    getVariable(id: Int!): Variable
    getVariablesByPromptId(promptId: Int!): [Variable!]!
  }

  extend type Mutation {
    createVariable(input: CreateVariableInput!): Variable!
    updateVariable(id: Int!, input: UpdateVariableInput!): Variable
    deleteVariable(id: Int!): Boolean
  }
`;
