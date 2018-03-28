import React from 'react';
import Subscribe from '../subscribe';
import logo from 'static/brand_wonderkiln_logo.svg';
import footer from 'static/il_footer.png';
import styles from './footer.scss';

const Footer = () => (
  <footer className={styles.footer} style={{backgroundImage: `url('${footer}')`}}>
    <div className={`container ${styles.container}`}>
      <Subscribe />
      <a className={styles.link} href="https://www.wonderkiln.com">
        <img src={logo} className={styles.logo} alt="Wonderkiln Logo" />
      </a>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li className={styles.listItem}>
            <a className={styles.link} href="https://www.wonderkiln.com/about">
              About Wonderkiln
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.link} href="/">
              Terms of Use
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.link} href="/">
              License
            </a>
          </li>
        </ul>
        <div className={styles.copyright}>
          © 2017 WonderKiln, Inc
        </div>
      </nav>
    </div>
  </footer>
);

export default Footer;
