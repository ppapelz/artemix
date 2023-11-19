'use client';

import { useState } from 'react';
import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';

import styles from './layout.module.scss';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  const [title, setTitle] = useState('');

  return (
    <div className="flex min-h-screen">
      <Sidebar setTitle={setTitle}></Sidebar>
      <div className="w-full mx-8 my-6 place-content-center">
        <Navbar title={title}></Navbar>
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
