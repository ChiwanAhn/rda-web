import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import styles from './header.module.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/#about"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/#program"
            >
              PROGRAM
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/#trial"
            >
              TRIAL
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
