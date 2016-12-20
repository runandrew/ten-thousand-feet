import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


/* -----------------    COMPONENT     ------------------ */

const SingleGraph = () => {

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
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(SingleGraph);
