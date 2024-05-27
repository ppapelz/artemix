import gql from 'graphql-tag';

export const accountOrgsQuery = gql`
mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
    id
    name
    description
  }
}
`;