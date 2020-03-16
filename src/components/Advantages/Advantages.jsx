/* eslint-disable object-curly-newline */
/* eslint-disable prefer-template */

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faBolt, faFootballBall, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

import Section from '../Section/Section';
import styles from './Advantages.module.scss';

function icons(icon) {
  if (icon === 'faBrain') { icon = faBrain; }
  if (icon === 'faBolt') { icon = faBolt; }
  if (icon === 'faPuzzlePiece') { icon = faPuzzlePiece; }
  if (icon === 'faFootballBall') { icon = faFootballBall; }
  return (icon);
}

const Advantages = ({ title, subtitle, advantage }) => (
  <Section title={title} subtitle={subtitle} variant="left_dark">
    <div className={styles.content}>
      <div className={styles.advantages_wrapper}>
        
        {advantage.map(item => (
          <div key={item.title} className={styles.advantage + item.class.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
            <FontAwesomeIcon icon={icons(item.icon)} className={styles.icon} />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

Advantages.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  advantage: PropTypes.array,
};

export default Advantages;
