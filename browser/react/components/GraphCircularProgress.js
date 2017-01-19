
// Required packages
import React from 'react';
import { connect } from 'react-redux';

// Required files
import { graphDonut, graphSettings } from '../../d3/donut-graph';

/* -----------------    COMPONENT     ------------------ */

class GraphCircularProgress extends React.Component {
    constructor(props) {
        super(props);

        this.graphDonut = graphDonut();
    }

    componentDidMount() {
        this.graphDonut.create(`#graphCircularProgress-${this.props.type}`,
            {
                graphSettings: this.props.graphSettings,
                type: this.props.type
            },
            { dayTotals: this.props.dayTotals }
        );
    }

    static typeToName(type) {
        return type.charAt(0).toUpperCase() + type.slice(1);
    }

    render() {
        return (
            <div className="card grey lighten-5 graphContainer" >
                <div className="card-content">
                    <span className="card-title">{GraphCircularProgress.typeToName(this.props.type)}</span>
                    <div id={`graphCircularProgress-${this.props.type}`} />
                </div>
            </div>
        );
    }
}

// PropType validaiton
GraphCircularProgress.propTypes = {
    durationData: React.PropTypes.object,
    graphSettings: React.PropTypes.object,
    dayIndex: React.PropTypes.number,
    dayTotals: React.PropTypes.object,
    type: React.PropTypes.string
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state, ownProps) => {
    return {
        dayTotals: {
            coding: +state.dayData.allDays[ownProps.dayIndex].codingData.totalCodingHours,
            physical: state.dayData.allDays[ownProps.dayIndex].physicalData.totalSteps
        },
        dayIndex: ownProps.dayIndex,
        type: ownProps.type,
        graphSettings: graphSettings
    };
};
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(GraphCircularProgress);
