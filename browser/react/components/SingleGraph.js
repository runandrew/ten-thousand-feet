/* global d3 */

import React from 'react';
import { connect } from 'react-redux';

import { graphSettings, d3SingleGraph } from '../../d3/single-graph';

// /* -----------------    CONSTANTS     ------------------ */
// const graphSettings = {
//
//     // SVG
//     svgWidth: 900,
//     svgHeight: 250,
//     padding: 30,
//
//     // Colors
//     codeDark: '#e65100',
//     codeLight: '#ffb74d'
// };

/* -----------------    COMPONENT     ------------------ */

class SingleGraph extends React.Component {

    componentDidMount() {
        const graph = d3SingleGraph();
        graph.create('#mainSet', { graphSettings }, { durationData: this.props.durationData });
    }

    render() {
        return (
            <div className="section no-pad-bot" id="graph">
                <div className="container">
                    <div className="row center">
                        <div className="card grey lighten-5">
                            <div className="card-content" id="mainSet">
                                <span className="card-title">Todays Activity - 12/10/16</span>
                            </div>
                            <div className="card-action">
                                <a href="#">Details</a>
                                <a href="#">Share</a>
                            </div>
                        </div>
                        <div id="tooltip" className="hidden">
                            <p><strong>Project: </strong><span id="value">100</span></p>
                            <p><strong>Duration: </strong><span id="duration">100</span> mins</p>
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
    graphSettings: React.PropTypes.object
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state) => {
    return {
        durationData: state.codeData.durationData,
        graphSettings
    };
};
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(SingleGraph);
