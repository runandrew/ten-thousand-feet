// Required packages
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Required files
import store from './store';
import Root from './components/Root';

// import Routes from './Routes'

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
        <Route path="/" component={Root}>
        </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
