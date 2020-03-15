/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import Section from '../Section/Section';
import styles from './Portfolio.module.scss';

const demoContent = [
  {
    img: 'https://i.postimg.cc/Wbc6BY16/Game.png',
    title: 'JS Game',
    subtitle: 'HTML SCSS JS',
    link: 'https://simple-js-game.herokuapp.com/',
  },
  {
    img: 'https://i.postimg.cc/pL2QT98m/Pizzeria.png',
    title: 'Pizzeria',
    subtitle: 'Vanilla JS',
    link: 'https://mamma-mia-the-best-pizzeria.herokuapp.com/',
  },
  {
    img: 'https://i.postimg.cc/RZX7nMQX/To-do-list.png',
    title: 'To do List',
    subtitle: 'React',
    link: 'https://the-best-to-do-list.herokuapp.com/',
  },
  {
    img: 'https://i.postimg.cc/vmTWrp0M/Utopia-shop.png',
    title: 'Utopia Shop',
    subtitle: 'React',
    link: 'https://the-best-to-do-list.herokuapp.com/',
  },
];

const Portfolio = ({title, subtitle, portfolio}) => (
  <Section title={title} subtitle={subtitle} variant="right_light">
    <div className={styles.content}>
      {portfolio.map(item => (
        <div key={item.title} className={styles.item}>
          <a href={item.link} target="_blank">
            <img className={styles.image} src={item.img} alt={item.title} />
            <figcaption>
              <p className={styles.item_title}>{item.title}</p>
              <p className={styles.item_subtitle}>{item.subtitle}</p>
            </figcaption>
          </a>
        </div>
      ))}
    </div>
  </Section>
);

export default Portfolio;
