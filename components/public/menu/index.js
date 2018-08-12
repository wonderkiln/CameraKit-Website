import React from 'react';
import PropTypes from 'prop-types';
import styles from './menu.scss';

import global from '../../../styles/styles.global.scss';

const Menu = ({ active, toggle }) => (
  <div id="menu" className={active ? styles.active : ''}>
    <div className={styles.overlay} onClick={toggle} onKeyDown={toggle} role="link" tabIndex={0} />
    <div className={styles.menu}>
      <div className={styles.background} />
      <div className={styles.content}>
        <ul className={styles.links}>
          <li className={styles.item}>
            <a className={`${global['heading--large']} ${styles.link}`} href="http://docs.camerakit.website/#/">
              {'Documentation'}
            </a>
          </li>
          <li className={styles.item}>
            <a className={`${global['heading--large']} ${styles.link}`} href="https://github.com/CameraKit/jpegkit-android">
              {'JPEGKit'}
            </a>
          </li>
          <li className={styles.item}>
            <a className={`${global['heading--large']} ${styles.link}`} href="https://github.com/CameraKit/camerakit-android">
              {'Github'}
            </a>
          </li>
        </ul>
        <div>
          <span>
            <span role="img" aria-label="American Flag">
              {'🇺🇸'}
            </span>
            {' Built and Managed in the USA'}
          </span>
          <br />
          <span>
            {'Made with ❤ by the CameraKit Team'}
          </span>
        </div>
      </div>
    </div>
  </div>
);

Menu.defaultProps = {
  active: false,
};

Menu.propTypes = {
  active: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
};

export default Menu;