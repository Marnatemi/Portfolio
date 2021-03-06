/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

import styles from './footer.module.scss';

const date = new Date();
const currentYear = date.getFullYear();

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.links_wrapper}>
        <a href="https://github.com/Marnatemi" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubSquare} /></a>
        <a href="https://www.linkedin.com/in/marlena-czerwi%C5%84ska-8650051a5/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://www.facebook.com/marlena.stefankiewicz.3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare} /></a>
      </div>
      <p className="footer-gatsby">Copyright © Marlena Czerwińska {currentYear}</p>
    </div>
  </footer>
);

// Footer.propTypes = {

// };
// Footer.defaultProps = {

// };

export default Footer;
