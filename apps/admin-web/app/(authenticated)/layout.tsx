import React from 'react';
import { redirect } from 'next/navigation';
import {
  SessionAuthForNextJS,
  TryRefreshComponent,
} from '@artemix/web/auth/feature';
import { getSSRSessionHelper } from '@artemix/web/auth/util/server';
import { ApolloClientProvider } from '@artemix/web/shared/data-access';

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

  if (!session) {
    if (!hasToken) {
      return redirect('/auth');
    }

    if (hasInvalidClaims) {
      return <SessionAuthForNextJS />;
    }

    return <TryRefreshComponent />;
  }

  return <ApolloClientProvider>{children}</ApolloClientProvider>;
}
