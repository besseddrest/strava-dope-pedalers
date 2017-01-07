import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import activities from './activities';
import activeCard from './activeCard';

const rootReducer = combineReducers({
  activities,
  activeCard,
  routing: routerReducer
});

export default rootReducer;
