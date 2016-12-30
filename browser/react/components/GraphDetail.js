// Required libraries
import React from 'react';
import { connect } from 'react-redux';

// Required files
import SingleGraph from './SingleGraph';
import GraphCircularProgress from './GraphCircularProgress';
import ProjectsWorkedOn from './ProjectsWorkedOn';
import LoadingIcon from './LoadingIcon';

/* -----------------    COMPONENT     ------------------ */

const GraphDetail = (props) => {
    const graphCards = (
        <div className="center">
            <h4>Overview</h4>
            <SingleGraph dayIndex={+props.dayId} />
            <h4>Daily Goal Progress</h4>
            <div className="row center">

                <div className="col s6">
                    <GraphCircularProgress type="coding" dayIndex={+props.dayId}/>
                </div>
                <div className="col s6">
                    <GraphCircularProgress type="physical" dayIndex={+props.dayId}/>
                </div>
            </div>
            <h4>Projects Worked On</h4>
            <div className="row center">
                <ProjectsWorkedOn dayIndex={+props.dayId} />
            </div>
        </div>
    )

    return (
        <div className="section no-pad-bot" >
            <div className="container">
                { !props.isFetching ?  graphCards : <LoadingIcon /> }
            </div>
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
