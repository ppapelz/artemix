'use client';

import { cn } from '@promptus/utils';
import {
  BellDot,
  DollarSign,
  Fingerprint,
  KeySquare,
  Database,
  ScanFace,
  Settings,
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.scss';

/* eslint-disable-next-line */
export interface NavbarProps {}

const data = [
  { link: '', label: 'Notifications', icon: BellDot },
  { link: '', label: 'Billing', icon: DollarSign },
  { link: '', label: 'Security', icon: Fingerprint },
  { link: '', label: 'SSH Keys', icon: KeySquare },
  { link: '', label: 'Databases', icon: Database },
  { link: '', label: 'Authentication', icon: ScanFace },
  { link: '', label: 'Other Settings', icon: Settings },
];

export function Navbar(props: NavbarProps) {
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <Link
      className={cn(`
        flex items-center text-lg font-medium px-2.5 
        py-3 rounded-sm hover:bg-zinc-100
        active:bg-sky-500 active:bg-opacity-20`,
        styles.link
      )}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        setActive(item.label);
      }}
    >
      <item.icon className={cn('mr-4 h-6 w-6')} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <aside className={cn('flex flex-col h-screen p-4 border-r', styles.navbar)}>
      <div className={cn('flex-1')}>
        <div className={cn('pb-4 mb-6 border-b')}>
          <h1>Welcome to Navbar!</h1>
        </div>
        {links}
      </div>

      <div className={cn(styles.footer)}>
        {/* <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <span>icon - </span>
          <span>Change account</span>
        </a>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <span>icon</span>
          <span>Logout</span>
        </a> */}
      </div>
    </aside>
  );
}

export default Navbar;
