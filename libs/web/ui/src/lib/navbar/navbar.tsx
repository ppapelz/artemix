import styles from './navbar.module.scss';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Navbar!</h1>
    </div>
  );
}

export default Navbar;
