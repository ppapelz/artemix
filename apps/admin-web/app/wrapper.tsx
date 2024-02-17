'use client';

import { SessionAuth } from 'supertokens-auth-react/recipe/session';
import { Layout } from '@promptus/ui';
import { initSPT } from '@promptus/web/auth/util';

initSPT();

export function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <SessionAuth>
      <Layout>{children}</Layout>
    </SessionAuth>
  );
}

export default Wrapper;
