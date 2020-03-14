/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

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
    return (
      <Section title="Contact" variant="right_light">
        <div className={styles.content}>
          <form
            id="form"
            onSubmit={this.submitForm}
            action="https://formspree.io/mjvrzwge"
            method="POST"
          >
            <div className={styles.form_group}>
              <label htmlFor="name">Your Name</label>
              <input className={styles.form_control} type="text" name="name" />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="email">Your Email</label>
              <input className={styles.form_control} type="email" name="email" required aria-describedby="emailHelp" />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="message">Message</label>
              <textarea className={styles.form_control} required rows="5" name="message" placeholder="If you would like me to join your team just send a message! Also I would appreciate all of feedback so don't hesitate to write :)" />
            </div>
            <button className={styles.btn} type="submit">
              Send!
              <FontAwesomeIcon icon={faPaperPlane} className={styles.icon} />
            </button>
          </form>
        </div>
        <Modal show={this.state.show} handleClose={this.closeModal} />
      </Section>
    );
  }
}

export default Contact;
