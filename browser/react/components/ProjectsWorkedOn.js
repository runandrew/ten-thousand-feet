
// Required packages
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// Required files
// import { graphSettings, d3SingleGraph } from '../../d3/single-graph';
import { graphDonut, graphSettings } from '../../d3/donut-graph';

/* -----------------    COMPONENT     ------------------ */

class ProjectsWorkedOn extends React.Component {

    componentDidMount() {

    }


    render() {
        return (
            <div className="card grey lighten-5 graphContainer" >
                <div className="card-content">
                    <ul className="collection with-header">
                        { Object.keys(this.props.dayData.codingData.totalCodingSecondsPerProject).map((key, i) => {
                            return (
                                <li className="collection-item" key={i}><div>{key}<span className="secondary-content">{(this.props.dayData.codingData.totalCodingSecondsPerProject[key] / 60).toFixed(1)} mins</span></div></li>
                            );
                        }) }
                    </ul>
                </div>
            </div>
        );
    }
}

// PropType validaiton
ProjectsWorkedOn.propTypes = {
    dayIndex: React.PropTypes.number
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
