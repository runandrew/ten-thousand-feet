import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/* -----------------    COMPONENT     ------------------ */

const Auth = () => {

    return (
        <div className="row">
            <div className="col s6 offset-s3 center">
                <div className="card grey lighten-5">
                    <div className="card-content" id="mainSet">
                        <p className="card-title">Please sign in:</p>
                        <a href="/auth/jawbone/" className="waves-effect waves-light btn">Authenticate with UP</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(Auth);
