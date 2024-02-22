import React from 'react';
import { redirect } from 'next/navigation';
import { Layout } from '@promptus/ui';
import { SessionAuthForNextJS, TryRefreshComponent } from '@promptus/feature';
import { getSSRSessionHelper } from '@promptus/web/auth/util/server';

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

  return <Layout>{children}</Layout>;
}
