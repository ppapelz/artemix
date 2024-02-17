'use client';
import React from 'react';
import { SuperTokensWrapper } from 'supertokens-auth-react';
import SuperTokensReact from 'supertokens-auth-react';
import { usePathname, useRouter } from 'next/navigation';
import { SuperTokenFrontendConfig, setRouter } from '@promptus/web/auth/util';

if (typeof window !== 'undefined') {
  SuperTokensReact.init(SuperTokenFrontendConfig());
}

export const SuperTokensProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  setRouter(useRouter(), usePathname() || window.location.pathname);

  return <SuperTokensWrapper>{children}</SuperTokensWrapper>;
};