/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section/Section';
import styles from './Portfolio.module.scss';

const Portfolio = ({ title, subtitle, portfolio }) => (
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

Portfolio.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  portfolio: PropTypes.array,
};

export default Portfolio;
