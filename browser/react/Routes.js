
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
const Routes = ({ fetchInitialData, fetchGraphData }) => (
    <Router history={ browserHistory }>
        <Route path="/" component={Root} onEnter={ fetchInitialData }>
            <Router path="/login" component={Auth} />
            <Router path="/graphs" component={Graphs} onEnter={ fetchGraphData }/>
        </Route>
    </Router>
);

// PropType validaiton
Routes.propTypes = {
    fetchInitialData: React.PropTypes.func,
    fetchGraphData: React.PropTypes.func,
    user: React.PropTypes.object
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state) => ({
    user: state.user
});

const mapDispatch = dispatch => ({
    fetchInitialData: () => {
        console.log('Fetching user data');
        dispatch(fetchUser());
    },
    fetchGraphData: () => {
        console.log('Fetching graph data');
        dispatch(fetchCodeData7Days());
    }
});

export default connect(mapProps, mapDispatch)(Routes);
