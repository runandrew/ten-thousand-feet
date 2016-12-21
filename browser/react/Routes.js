// Required packages
import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Required files
import store from './store';
import Root from './components/Root';
// -- Functions
import { fetchCodeData, fetchCodeData7Days } from './reducers/code-data';

/* -----------------    COMPONENT     ------------------ */
const Routes = ({ fetchInitialData }) => (
    <Router history={ browserHistory }>
        <Route path="/" component={Root} onEnter={ fetchInitialData }>
        </Route>
    </Router>
);

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;

const mapDispatch = dispatch => ({
 fetchInitialData: () => {
    console.log('Fetching the data');
    dispatch(fetchCodeData());
    dispatch(fetchCodeData7Days());
  }
});

export default connect(mapProps, mapDispatch)(Routes);
