
// Required packages
import React from 'react';
import { connect } from 'react-redux';

// Required files

/* -----------------    COMPONENT     ------------------ */

const ProjectsWorkedOn = (props) => {
    return (
        <div className="card grey lighten-5 graphContainer" >
            <div className="card-content">
                <div className="row">
                    <div className="col s6 offset-s3">
                        <ul className="collection with-header">
                            { Object.keys(props.dayData.codingData.totalCodingSecondsPerProject).map((key, i) => {
                                return (
                                    <li className="collection-item" key={i}><div>{key}<span className="secondary-content">{(props.dayData.codingData.totalCodingSecondsPerProject[key] / 60).toFixed(0)} mins</span></div></li>
                                );
                            }) }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};


// PropType validaiton
ProjectsWorkedOn.propTypes = {
    dayIndex: React.PropTypes.number,
    dayData: React.PropTypes.object
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state, ownProps) => {
    return {
        dayData: state.dayData.allDays[ownProps.dayIndex],
        dayIndex: ownProps.dayIndex
    };
};
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(ProjectsWorkedOn);
