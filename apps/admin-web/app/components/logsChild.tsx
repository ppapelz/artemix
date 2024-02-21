import { cookies, headers } from 'next/headers';
import React from 'react';
import { getSSRSession } from 'supertokens-node/nextjs';
import { SessionContainer } from 'supertokens-node/recipe/session';
import gql from 'graphql-tag';
import { getApolloServerClient } from '@promptus/web/shared/data-access/server';

const LogsChild = async () => {
  let aiModelsData = null;
  const aiModels = gql`
    {
      getAllAIModels {
        promptId
      }
    }
  `;
  let error: Error | undefined = undefined;
  let session: SessionContainer | undefined;
  let hasToken = false;
  let hasInvalidClaims = false;

  try {
    ({ session, hasToken, hasInvalidClaims } = await getSSRSession(
      cookies().getAll(),
      headers()
    ));
    const token = session?.getAccessToken();
    const apolloClient = getApolloServerClient();
    
    const { data } = await apolloClient.query({ query: aiModels });
    aiModelsData = data?.getAllAIModels;
    console.log('data', data);
  } catch (err: any) {
    error = err;
  }
  return (
    <div>
      <h1>{aiModelsData[0]?.promptId}</h1>
    </div>
  );
};

export default LogsChild;
