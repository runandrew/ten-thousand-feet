// Required libraries
import React from 'react';
import { connect } from 'react-redux';

// Required files
import SingleGraph from './SingleGraph';
import LoadingIcon from './LoadingIcon';

/* -----------------    COMPONENT     ------------------ */

const Graphs = (props) => {
    return (
        <div>
        { !props.isFetching ? props.allDays.map((day, i) => {
            return ( <SingleGraph dayIndex={i} key={i} /> );
        }) : <LoadingIcon /> }
        </div>
    );
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state, ownProps) => {
    return {
        allDays: state.dayData.allDays,
        isFetching: state.dayData.isFetching
    };
};
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(Graphs);
