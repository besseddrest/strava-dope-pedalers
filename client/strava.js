// React & Redux
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux'

// CSS
import css from './styles/app.scss';

// Components
import App from './components/App';
import Activities from './components/Activities';

import store, {history} from './store';

// router will dictate which component child component we see
// <Route path="/" component={Main}></Route>: at the very top level '/' use Main component
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Activities}></IndexRoute>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('app'));
