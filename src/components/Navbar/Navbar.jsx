/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';

import styles from '../Header/header.module.scss';

const Navbar = ({ handler }) => {
  return (
    <nav>
      <div className={styles.triangle} />
      <div className={styles.navbar}>
        <div className={styles.nav_wrapper}>
          <p>Choose your language :</p>
          <div className={styles.buttons}>
            <button type="button" onClick={() => handler(0)} className={styles.btn}>EN</button>
            <button type="button" onClick={() => handler(1)} className={styles.btn}>PL</button>
            <button type="button" onClick={() => handler(2)} className={styles.btn}>FR</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  handler: PropTypes.func,
};

export default Navbar;
