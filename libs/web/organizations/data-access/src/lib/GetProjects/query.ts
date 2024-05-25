import gql from 'graphql-tag';

export const projectsByOrgIdQuery = gql`
query GetProjectsByOrgId($orgId: ID!) {
  getProjectsByOrgID(id: $orgId) {
    name
    description
    id
  }
}
`;