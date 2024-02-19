import React from 'react';
import { redirect } from 'next/navigation';
import { Layout } from '@promptus/ui';
import { SessionAuthForNextJS } from '../components/sessionAuthForNextJS';
import { TryRefreshComponent } from '../components/tryRefreshClientComponent';
import { getSSRSession } from 'supertokens-node/nextjs';
import { cookies, headers } from 'next/headers';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { ensureSuperTokensInit } from '@promptus/web/auth/util/server';

ensureSuperTokensInit();

async function getSSRSessionHelper(): Promise<{
  session: SessionContainer | undefined;
  hasToken: boolean;
  hasInvalidClaims: boolean;
  error: Error | undefined;
}> {
  let session: SessionContainer | undefined;
  let hasToken = false;
  let hasInvalidClaims = false;
  let error: Error | undefined = undefined;

  try {
    ({ session, hasToken, hasInvalidClaims } = await getSSRSession(
      cookies().getAll(),
      headers()
    ));
  } catch (err: any) {
    error = err;
  }
  return { session, hasToken, hasInvalidClaims, error };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session, hasToken, hasInvalidClaims, error } =
    await getSSRSessionHelper();

  if (error) {
    return (
      <div>
        Something went wrong while trying to get the session. Error -{' '}
        {error.message}
      </div>
    );
  }

  // `session` will be undefined if it does not exist or has expired
  if (!session) {
    if (!hasToken) {
      /**
       * This means that the user is not logged in. If you want to display some other UI in this
       * case, you can do so here.
       */
      return redirect('/auth');
    }

    /**
     * `hasInvalidClaims` indicates that session claims did not pass validation. For example if email
     * verification is required but the user's email has not been verified.
     */
    if (hasInvalidClaims) {
      /**
       * This will make sure that the user is redirected based on their session claims. For example they
       * will be redirected to the email verification screen if needed.
       *
       * We pass in no children in this case to prevent hydration issues and still be able to redirect the
       * user.
       */
      return <SessionAuthForNextJS />;
    } else {
      /**
       * This means that the session does not exist but we have session tokens for the user. In this case
       * the `TryRefreshComponent` will try to refresh the session.
       */
      return <TryRefreshComponent />;
    }
  }
  return <Layout>{children}</Layout>;
}
