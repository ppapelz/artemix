import gql from 'graphql-tag';

export const prompts = gql`
query GetOrganizationsByAccountID($accountId: ID!) {
  getOrganizationsByAccountID(id: $accountId) {
    id
    name
  }
}
`;