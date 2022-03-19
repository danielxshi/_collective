import Link from 'next/link';
import { useState } from 'react';
import styles from '../../styles/modules/_nav.module.scss';
import { MenuItems } from './MenuItems';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <header>
        <nav className={[styles['nav'], styles['nav--grid']].join(' ')}>
          <Link href="/">
            <a
              className={[styles['nav--logo--grid'], styles['nav--logo']].join(
                ' '
              )}
            >
              005F
            </a>
          </Link>
          <button
            className={
              isOpen === false
                ? styles.hamburger
                : styles.hamburger + ' ' + styles.active
            }
            onClick={openMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </nav>
      </header>
      {children}
    </>
  );
}
