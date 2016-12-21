
// Required packages
import React from 'react';
import { connect } from 'react-redux';

// Required files
import { graphSettings, d3SingleGraph } from '../../d3/single-graph';
import { dateStrToUTC, dateUTCToDayStr } from '../../utils';

/* -----------------    COMPONENT     ------------------ */

class SingleGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            svg: null
        };

        this.graph  = d3SingleGraph();
    }

    componentDidMount() {
        const { svg } = this.graph.create(
            `#graph-${this.props.dayIndex}`,
            { graphSettings },
            { durationData: this.props.durationData }
        );

        this.setState({ svg });

        this.graph.update(svg,
            { graphSettings, dayIndex: this.props.dayIndex },
            { durationData: this.props.durationData }
        );
    }

    componentDidUpdate() {
        this.graph.update(this.state.svg,
            { graphSettings, dayIndex: this.props.dayIndex },
            { durationData: this.props.durationData }
            );
    }

    getCurrentDay() {
        const UTCday = dateStrToUTC(this.props.durationData.start);
        return dateUTCToDayStr(UTCday);
    }

    getCurrentLocalDate() {
        const UTCday = dateStrToUTC(this.props.durationData.start);
        return UTCday.toLocaleDateString();
    }

    render() {
        return (
            <div className="section no-pad-bot graphContainer" id={`graphContainer-${this.props.dayIndex}`} >
            <div className="container">
            <div className="row center">
            <div className="card grey lighten-5">
            <div className="card-content" id="mainSet">
            <span className="card-title">{ this.props.dayIndex ? `${this.getCurrentDay()}'s` : "Today's" } Activity - { this.getCurrentLocalDate() }</span>
            <div id={`graph-${this.props.dayIndex}`} />
            </div>
            <div className="card-action">
            <a href="#">Details</a>
            <a href="#">Share</a>
            </div>
            </div>
            <div id={`tooltip-${this.props.dayIndex}`} className="hidden tooltip">
            <p><strong>Project: </strong><span className="value">100</span></p>
            <p><strong>Duration: </strong><span className="duration">100</span> mins</p>
            </div>
            </div>
            </div>
            </div>
        );
    }
}

// PropType validaiton
SingleGraph.propTypes = {
    durationData: React.PropTypes.object,
    graphSettings: React.PropTypes.object,
    dayIndex: React.PropTypes.number
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state, ownProps) => {
    return {
        durationData: state.codeData.durationData[ownProps.dayIndex],
        graphSettings,
        dayIndex: ownProps.dayIndex
    };
};
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(SingleGraph);
