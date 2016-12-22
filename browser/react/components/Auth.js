import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/* -----------------    COMPONENT     ------------------ */

const Auth = () => {

    return (
        <div className="row">
            <div className="col s6 offset-s3 center">
                <h5>Please sign in:</h5>
                <a href="/auth/jawbone/" className="waves-effect waves-light btn">Authenticate with UP</a>
            </div>
        </div>
    );
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(Auth);
