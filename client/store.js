import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

import rootReducer from './reducers/index';
import activities from './data/activities';

// import data

// create an object for the default data
// there should be a key for each reducer
const defaultState = {
  activities
};

const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
