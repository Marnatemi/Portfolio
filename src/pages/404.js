import React from 'react';
import styles from '../atoms/theme/404.module.scss';

const notFound = () => (

  <section className={styles.page}>
    <article className={styles.card}>
      <div className={styles.message}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.text}>Page not found</p>
      </div>
    </article>
  </section>

);

export default notFound;
