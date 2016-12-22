
// Required packages
import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

// Required files
import Root from './components/Root';
import Auth from './components/Auth';
import Graphs from './components/Graphs';

// -- Functions
import { fetchCodeData7Days } from './reducers/code-data';
import { fetchUser } from './reducers/user';

/* -----------------    COMPONENT     ------------------ */
const Routes = ({ fetchInitialData }) => (
    <Router history={ browserHistory }>
        <Route path="/" component={Root} onEnter={ fetchInitialData }>
            <Router path="/login" component={Auth} />
            <Router path="/graphs" component={Graphs} />
        </Route>
    </Router>
);

// PropType validaiton
Routes.propTypes = {
    fetchInitialData: React.PropTypes.func,
    user: React.PropTypes.object
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state) => ({
    user: state.user
});

const mapDispatch = dispatch => ({
    fetchInitialData: () => {
        console.log('Fetching the data');
        dispatch(fetchCodeData7Days());
        dispatch(fetchUser());
    }
});

export default connect(mapProps, mapDispatch)(Routes);