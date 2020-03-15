/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
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
    const language = this.state.language;
    return (
      <div>
        {console.log(language)}
        <Layout lang={language.id}>
          <Header title={language.header.title} subtitle={language.header.subtitle} />
          <AboutMe title={language.aboutMe.title} text={language.aboutMe.text} text2={language.aboutMe.text2} />
          <Portfolio title={language.portfolio.title} subtitle={language.portfolio.subtitle} portfolio={language.portfolio.portfolio} />
          <Advantages title={language.advantages.title} subtitle={language.advantages.subtitle} advantage={language.advantages.advantage} />
          <Contact title={language.contact.title} name={language.contact.name} email={language.contact.email} message={language.contact.message} placeholder={language.contact.placeholder} button={language.contact.button} modal={language.contact.modal} />
        </Layout>
      </div>
    );
  }
}

// App.propTypes = {
//   language: PropTypes.object,
// };


export default App;
