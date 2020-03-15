
import React from 'react';
// import PropTypes from 'prop-types';

import styles from '../Header/header.module.scss';

const Navbar = () => {
  function handleClick(e) {
    e.preventDefault();
    console.log('CLICKED!');
  }
  return (
    <div>
      <div className={styles.triangle} />
      <nav className={styles.navbar}>
        <div className={styles.nav_wrapper}>
          <p>Choose your language :</p>
          <div className={styles.buttons}>
            <button type="button" className={styles.btn}>PL</button>
            <button type="button" onClick={handleClick} className={styles.btn}>EN</button>
            <button type="button" className={styles.btn}>FR</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

// Header.propTypes = {

// };
// Header.defaultProps = {

// };

export default Navbar;
