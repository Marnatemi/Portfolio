/* eslint-disable object-curly-newline */

import React from 'react';

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

    this.handler = this.handler.bind(this);
    console.log(this.state);
  }

  handler(lang) {
    this.setState({
      language: data[lang],
    });
  }

  render() {
    const { language: { id, header, aboutMe, portfolio, advantages, contact } } = this.state;
    return (
      <div>
        {/* {console.log(id, header, aboutMe, portfolio, advantages, contact)} */}
        <Layout lang={id} handler={this.handler}>
          <Header title={header.title} titleName={header.titleName} subtitle={header.subtitle} />
          <AboutMe title={aboutMe.title} text={aboutMe.text} text2={aboutMe.text2} />
          <Portfolio title={portfolio.title} subtitle={portfolio.subtitle} portfolio={portfolio.portfolio} />
          <Advantages title={advantages.title} subtitle={advantages.subtitle} advantage={advantages.advantage} />
          <Contact title={contact.title} name={contact.name} email={contact.email} message={contact.message} placeholder={contact.placeholder} button={contact.button} modal={contact.modal} />
        </Layout>
      </div>
    );
  }
}

export default App;
