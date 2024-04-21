import React from 'react';
import gql from 'graphql-tag';
import { getApolloClient } from '@promptus/web/shared/data-access/server';

export default async function Logs() {
  let promptsData = [];
  const prompts = gql`
    {
      getAllPrompts {
        content
        id
        name
        updatedAt
      }
    }
  `;
  let error: Error | undefined = undefined;

  try {
    const apolloClient = await getApolloClient();
    const { data } = await apolloClient.query({ query: prompts });
    promptsData = data?.getAllPrompts;
  } catch (err: any) {
    error = err;
  }
  return (
    <div>
      {promptsData[0]?.content}
    </div>
  );
}
