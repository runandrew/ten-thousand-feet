import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/* -----------------    COMPONENT     ------------------ */

const Navbar = () => {

    return (
        <nav className="blue darken-3" role="navigation">
            <div className="nav-wrapper container"><Link id="logo-container" to="/" className="brand-logo"><img src="/img/logo.png" width="50px"/>10,000 feet</Link>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/graphs">Graphs</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><a href="/auth/logout">Logout</a></li>
                </ul>

                <ul id="nav-mobile" className="side-nav">
                    <li><Link to="/graphs">Graphs</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/auth/logout">Logout</Link></li>
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
