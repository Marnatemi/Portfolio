import { createStore } from 'redux';

import rootReducer from '../reducers/rootReducer';
import data from '../data.json';


const initialState = {
  languages: data,
};

export default createStore(rootReducer);
