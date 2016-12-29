// Required libraries
import React from 'react';
import { connect } from 'react-redux';

// Required files
import SingleGraph from './SingleGraph';
import LoadingIcon from './LoadingIcon';

/* -----------------    COMPONENT     ------------------ */

const GraphDetail = (props) => {
    return (
        <div>
            { !props.isFetching ? <SingleGraph dayIndex={+props.dayId} /> : <LoadingIcon /> }
        </div>
    );


};

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state, ownProps) => {
    return {
        allDays: state.dayData.allDays,
        isFetching: state.dayData.isFetching,
        dayId: ownProps.routeParams.dayId
    };
};
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(GraphDetail);
