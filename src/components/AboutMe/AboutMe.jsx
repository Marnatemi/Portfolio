/* eslint-disable max-len */
import React from 'react';

import Section from '../Section/Section';
import styles from './AboutMe.module.scss';

const AboutMe = ({title, text, text2}) => (
  <Section title={title} variant="left_light">
    <div className={styles.content}>
      <p className={styles.text}>{text}</p>
      <p className={styles.text}>{text2}</p>
    </div>
  </Section>
);

export default AboutMe;
