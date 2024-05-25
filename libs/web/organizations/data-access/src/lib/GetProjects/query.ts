import gql from 'graphql-tag';

export const projectsByOrgIdQuery = gql`
query GetProjectsByOrgId($organizationId: ID!) {
  getProjectsByOrgID(id: $organizationId) {
    name
    description
    id
  }
}
`;