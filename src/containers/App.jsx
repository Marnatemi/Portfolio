import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import store from '../store/store';

import Layout from './Layout';
import Index from '../pages/index';

const App = () => (
  <Provider store={store}>
    <Index />
  </Provider>
);


export default App;
