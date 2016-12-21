import React from 'react';
import { connect } from 'react-redux';

/* -----------------    COMPONENT     ------------------ */

const Navbar = () => {

    return (
        <nav className="blue darken-3" role="navigation">
            <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo"><img src="/img/logo.png" width="50px"/>10,000 feet</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="#">Login</a></li>
                </ul>

                <ul id="nav-mobile" className="side-nav">
                    <li><a href="#">Login</a></li>
                </ul>
                <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
            </div>
        </nav>
    );
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(Navbar);
