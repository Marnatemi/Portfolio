/* eslint-disable object-curly-newline */

import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Header from '../components/Header/Header';
import AboutMe from '../components/AboutMe/AboutMe';
import Portfolio from '../components/Portfolio/Portfolio';
import Advantages from '../components/Advantages/Advantages';
import Contact from '../components/Contact/Contact';
import Layout from './Layout';
import data from '../data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    props = data;
    this.state = {
      language: props[0],
    };
    console.log(this.state);
  }

  render() {
    const { language: { id, header, aboutMe, portfolio, advantages, contact } } = this.state;
    return (
      <div>
        {console.log(id, header, aboutMe, portfolio, advantages, contact)}
        <Layout lang={id}>
          <Header title={header.title} subtitle={header.subtitle} />
          <AboutMe title={aboutMe.title} text={aboutMe.text} text2={aboutMe.text2} />
          <Portfolio title={portfolio.title} subtitle={portfolio.subtitle} portfolio={portfolio.portfolio} />
          <Advantages title={advantages.title} subtitle={advantages.subtitle} advantage={advantages.advantage} />
          <Contact title={contact.title} name={contact.name} email={contact.email} message={contact.message} placeholder={contact.placeholder} button={contact.button} modal={contact.modal} />
        </Layout>
      </div>
    );
  }
}

// App.propTypes = {
//   language: PropTypes.object,
// };


export default App;
