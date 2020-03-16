/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import Section from '../Section/Section';
import Modal from '../Modal/Modal';
import styles from './Contact.module.scss';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };

    this.closeModal = this.closeModal.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  closeModal() {
    this.setState({ show: false });
  }

  submitForm(ev) {
    ev.preventDefault();
    console.log(this.state);
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        // eslint-disable-next-line no-unused-expressions
        this.setState({ show: true });
        console.log(this.state);
      } else {
        alert('Oops. Something went wrong...');
      }
    };
    xhr.send(data);
  }

  render() {
    // eslint-disable-next-line object-curly-newline
    const { title, name, email, message, placeholder, button, modal: { status, text } } = this.props;
    return (
      <Section title={title} variant="right_light">
        <div className={styles.content}>
          <form
            id="form"
            onSubmit={this.submitForm}
            action="https://formspree.io/mjvrzwge"
            method="POST"
          >
            <div className={styles.form_group}>
              <label htmlFor="name">{name}</label>
              <input className={styles.form_control} type="text" name="name" />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="email">{email}</label>
              <input className={styles.form_control} type="email" name="email" required aria-describedby="emailHelp" />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="message">{message}</label>
              <textarea className={styles.form_control} required rows="5" name="message" placeholder={placeholder} />
            </div>
            <button className={styles.btn} type="submit">
              {button}
              <FontAwesomeIcon icon={faPaperPlane} className={styles.icon} />
            </button>
          </form>
        </div>
        <Modal show={this.state.show} handleClose={this.closeModal} status={status} text={text} />
      </Section>
    );
  }
}

Contact.propTypes = {
  title: PropTypes.string,
  name: PropTypes.array,
  email: PropTypes.array,
  message: PropTypes.array,
  placeholder: PropTypes.array,
  button: PropTypes.string,
  modal: PropTypes.object,
};

export default Contact;
