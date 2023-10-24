import gql from 'graphql-tag';

export const AIModelType = gql`
  type AIModel {
    id: Int!
    modelType: String!
    aiConnectionToken: String!
    temperature: Float!
    maxLength: Int!
    stop: String!
    presencePenalty: Float!
    frequencyPenalty: Float!
    promptId: Int!
  }

  input CreateAIModelInput {
    modelType: String!
    aiConnectionToken: String!
    temperature: Float!
    maxLength: Int!
    stop: String!
    presencePenalty: Float!
    frequencyPenalty: Float!
    promptId: Int!
  }

  input UpdateAIModelInput {
    modelType: String
    aiConnectionToken: String
    temperature: Float
    maxLength: Int
    stop: String
    presencePenalty: Float
    frequencyPenalty: Float
    promptId: Int
  }

  extend type Query {
    getAIModel(id: Int!): AIModel
    getAllAIModels: [AIModel!]!
  }

  extend type Mutation {
    createAIModel(input: CreateAIModelInput!): AIModel!
    updateAIModel(id: Int!, input: UpdateAIModelInput!): AIModel
    deleteAIModel(id: Int!): Boolean
  }
`;
