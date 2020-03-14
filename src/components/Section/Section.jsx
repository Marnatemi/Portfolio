/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './Section.module.scss';

// eslint-disable-next-line object-curly-newline
const Section = ({ title, variant = '', children, subtitle }) => {
  return (
    // eslint-disable-next-line prefer-template
    <section className={styles.section + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
      {console.log()}
      <article className={styles.wrapper}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        {children}
      </article>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
};


export default Section;
