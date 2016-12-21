import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/* -----------------    COMPONENT     ------------------ */

const Auth = () => {

    return (
        <div className="row">
            <form className="col s4 offset-s4">
                <h5 className="center">Please enter your information</h5>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate" />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
            </form>
            <div className="col s4 offset-s4">
                <a href="/auth/jawbone/" className="waves-effect waves-light btn">Sign in with UP</a>
            </div>
        </div>
    );
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(Auth);
