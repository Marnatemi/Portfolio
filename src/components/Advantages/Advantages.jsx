/* eslint-disable object-curly-newline */
/* eslint-disable prefer-template */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faBolt, faFootballBall, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

import Section from '../Section/Section';
import styles from './Advantages.module.scss';

const demoContent = [
  {
    img: faBrain,
    title: 'Fast learning',
    text: 'Simply, I just like to learn new things',
    class: 'active',
  },
  {
    img: faBolt,
    title: 'Entusiasm',
    text: 'I hate boring at work, I always give 100%',
    class: 'active',
  },
  {
    img: faFootballBall,
    title: 'Team player',
    text: 'I feel responsable for work of my team',
    class: 'active',
  },
  {
    img: faPuzzlePiece,
    title: 'Problem resolving',
    text: 'Finding resolves for problems is like a chellange, give me much satisfaction',
    class: 'hidden',
  },
];

const Advantages = () => (
  <Section title="Why" subtitle="You should hire me?" variant="left_dark">
    <div className={styles.content}>
      <div className={styles.advantages_wrapper}>
        {demoContent.map(item => (
          <div key={item.title} className={styles.advantage + item.class.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
            <FontAwesomeIcon icon={item.img} className={styles.icon} />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default Advantages;
