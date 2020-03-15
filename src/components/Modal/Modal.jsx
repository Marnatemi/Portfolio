/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const Modal = ({ handleClose, show, status, text }) => {
  // ModalClassName = show ? `${styles.show}` : `${styles.hide}`;
  if (show === false) {
    return null;
  }
  return (
    <div className={styles.modal}>
      <section className={styles.card}>
        <h3>{status}</h3>
        <p>{text}</p>
        <button type="button" onClick={handleClose} className={styles.btn}>x</button>
      </section>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
};

Modal.defultProps = {
  show: false,
};

export default Modal;
