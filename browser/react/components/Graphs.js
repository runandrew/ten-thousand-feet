// Required libraries
import React from 'react';
import { connect } from 'react-redux';

// Required files
import SingleGraph from './SingleGraph';

/* -----------------    COMPONENT     ------------------ */

const Graphs = (props) => {
    return (
        <div>
        { props.durationData.map((day, i) => {
            return ( <SingleGraph dayIndex={i} key={i} /> );
        }) }
        </div>
    );
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state, ownProps) => {
    return {
        durationData: state.codeData.durationData,
    };
};
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(Graphs);
