import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import activities from './activities';
import activeCard from './activeCard';
import ride from './ride';

const rootReducer = combineReducers({
  activities,
  activeCard,
  ride,
  routing: routerReducer
});

export default rootReducer;
