import gql from 'graphql-tag';

export const accountOrgsQuery = gql`
query GetAccountOrgs($accountId: ID!) {
  getOrganizationsByAccountID(id: $accountId) {
    id,
    name,
    projects {
      id,
      name,
      description
    }
  }
}
`;