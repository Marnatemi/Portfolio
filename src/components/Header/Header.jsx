import React from 'react';
// import PropTypes from 'prop-types';

import styles from './header.module.scss';

const Header = () => {
  function handleClick(e) {
    e.preventDefault();
    console.log('CLICKED!');
  }
  return (
    <header>
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
      <div className={styles.container}>
        <div className={styles.header_wrapper}>
          <h1>Hi, I&apos;m Marlena</h1>
          <h5>An realistic optimist, intrested on ...almost everything?</h5>
        </div>
      </div>
    </header>
  );
};

// Header.propTypes = {

// };
// Header.defaultProps = {

// };

export default Header;
