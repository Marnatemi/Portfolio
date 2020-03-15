import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import store from '../store/store';
import Footer from '../components/Footer/Footer';
import Layout from './Layout';

const App = () => (
  <Provider>
    <Layout />
  </Provider>
  <Footer />
);


export default App;
