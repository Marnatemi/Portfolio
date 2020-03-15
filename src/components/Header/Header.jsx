import React from 'react';
// import PropTypes from 'prop-types';

import styles from './header.module.scss';

const Header = () => {
  return (
    <header>
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
