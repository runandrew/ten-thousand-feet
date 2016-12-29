
// Required packages
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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
            { dayDataSingle: this.props.dayDataSingle }
        );

        this.setState({ svg });

        this.graph.update(svg,
            { graphSettings, dayIndex: this.props.dayIndex },
            { dayDataSingle: this.props.dayDataSingle }
        );
    }

    componentDidUpdate() {
        this.graph.update(this.state.svg,
            { graphSettings, dayIndex: this.props.dayIndex },
            { dayDataSingle: this.props.dayDataSingle }
        );
    }

    getCurrentDay() {
        return dateUTCToDayStr(new Date(this.props.dayDataSingle.date));
    }

    render() {
        return (
            <div className="section no-pad-bot graphContainer" id={`graphContainer-${this.props.dayIndex}`} >
                <div className="container">
                    <div className="row center">
                        <div className="card grey lighten-5">
                            <div className="card-content" id="mainSet">
                            <span className="card-title">{ this.props.dayIndex ? `${this.getCurrentDay()}'s` : "Today's" } Activity - { this.props.dayDataSingle.date }</span>
                            <div id={`graph-${this.props.dayIndex}`} />
                            </div>
                            <div className="card-action">
                            <Link to={`/graphs/${this.props.dayIndex}`}>Details</Link>
                            <Link to="#">Share</Link>
                            <span className="cardStatsSpacing">{ `${this.props.dayDataSingle.physicalData.totalSteps} steps total` }</span>
                            <span className="cardStatsSpacing">{ `${this.props.dayDataSingle.codingData.totalCodingHours} ${this.props.dayDataSingle.codingData.totalCodingHours <= 1 && this.props.dayDataSingle.codingData.totalCodingHours > 0 ? 'hour' : 'hours'} coding` }</span>
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
        dayDataSingle: state.dayData.allDays[ownProps.dayIndex],
        graphSettings,
        dayIndex: ownProps.dayIndex
    };
};
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(SingleGraph);
