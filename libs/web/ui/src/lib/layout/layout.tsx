import Navbar from '../navbar/navbar';

import styles from './layout.module.scss';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Navbar></Navbar>
      <div className="w-full m-8 place-content-center">{props.children}</div>
    </div>
  );
}

export default Layout;
