import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Header from '../components/Header/Header';
import AboutMe from '../components/AboutMe/AboutMe';
import Portfolio from '../components/Portfolio/Portfolio';
import Advantages from '../components/Advantages/Advantages';
import Contact from '../components/Contact/Contact';
import Layout from './Layout';

const App = () => (
  <div>
    <Layout>
      <Header />
      <AboutMe />
      <Portfolio />
      <Advantages />
      <Contact />
    </Layout>
  </div>
);


export default App;
