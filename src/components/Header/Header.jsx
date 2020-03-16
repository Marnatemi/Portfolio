/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './header.module.scss';

const Header = ({ title, subtitle }) => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.header_wrapper}>
          <h1>{title}</h1>
          <h5>{subtitle}</h5>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
// Header.defaultProps = {

// };

export default Header;
