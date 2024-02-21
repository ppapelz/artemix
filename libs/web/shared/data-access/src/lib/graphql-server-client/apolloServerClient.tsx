import { cookies, headers } from 'next/headers';
import { getSSRSession } from 'supertokens-node/nextjs';
import { initializeApollo } from './initializeApollo';

export async function getApolloServerClient() {
  let session, token, client;

  try {
    ({ session } = await getSSRSession(cookies().getAll(), headers()));
    token = session?.getAccessToken();

    if (token) {
      client = initializeApollo(token);
      return client;
    } else {
      console.error('No token found');
      return null;
    }
  } catch (error) {
    console.error('Error initializing Apollo Client:', error);
    return null;
  }
}
