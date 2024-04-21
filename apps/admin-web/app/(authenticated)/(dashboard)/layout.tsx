import React from 'react';
import { Layout } from '@promptus/web-shared-ui';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
