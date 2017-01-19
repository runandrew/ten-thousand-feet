// Required packages
import React from 'react';
import { Link } from 'react-router';

/* -----------------    COMPONENT     ------------------ */

const Landing = () => {
    return (
        <div className="section no-pad-bot" id="index-banner">
            <div className="row">
                <div className="col m5 s10 offset-m1">
                    <div className="card grey lighten-5">
                        <div className="card-content" id="mainSet">
                            <h3 className="grey-text text-darken-3">Bring Balance to Your Life</h3>
                            <h4 className="grey-text">Get a high-level overview of your day</h4>
                            <Link to="/login" className="waves-effect waves-light btn center">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
