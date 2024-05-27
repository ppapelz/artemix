import { Layout } from '@artemix/web-layout-feature';
import React from 'react';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
