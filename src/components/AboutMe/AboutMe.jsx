/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import Section from '../Section/Section';
import styles from './AboutMe.module.scss';

const AboutMe = ({ title, text }) => (
  <Section title={title} variant="left_light">
    <div className={styles.container}>
      {text.map(paragraph => (
        <p key={paragraph} className={styles.text}>{paragraph}</p>
      ))}
    </div>
  </Section>
);

AboutMe.propTypes = {
  title: PropTypes.string,
  text: PropTypes.array,
};


export default AboutMe;
