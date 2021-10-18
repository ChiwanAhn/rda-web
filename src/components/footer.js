import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import styles from './footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return <footer className={styles.footer}></footer>;
};

export default Footer;
