/* eslint-disable max-len */
import React from 'react';

import Section from '../Section/Section';
import styles from './AboutMe.module.scss';

const AboutMe = () => (
  <Section title="About Me" variant="left_light">
    <div className={styles.content}>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis fringilla nibh vitae bibendum. Cras scelerisque mi purus,
        tincidunt condimentum purus finibus eget. Aliquam ornare vehicula turpis, tempus condimentum magna volutpat ac. Nullam a finibus est.
        Donec pellentesque odio lacus, sit amet laoreet turpis feugiat id. Pellentesque leo metus, porta et imperdiet venenatis, elementum et odio.
        Aliquam odio ex, vulputate eget ante a, fermentum vehicula tellus.
      </p>
      <p className={styles.text}>
        Donec tortor nunc, maximus at eros eu, laoreet feugiat urna. Morbi facilisis lacinia arcu, at varius neque accumsan viverra. Cras vitae
        ipsum posuere, rutrum diam in, fringilla nibh.
      </p>
    </div>
  </Section>
);

export default AboutMe;
