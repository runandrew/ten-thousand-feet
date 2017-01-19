import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/* -----------------    COMPONENT     ------------------ */

const Navbar = (props) => {

    return (
        <nav className="blue darken-3" role="navigation">
            <div className="nav-wrapper container">
                <Link id="logo-container" to="/" className="brand-logo">
                    <img src="/img/logo.png" width="50px"/>10,000 feet
                </Link>
                <ul className="right hide-on-med-and-down">
                    { props.user.noUser && <li><Link to="/login">Login</Link></li> }
                    { !props.user.noUser && <li><Link to="/graphs">Graphs</Link></li> }
                    { !props.user.noUser && <li><a href="/auth/logout">Logout</a></li> }
                    { !props.user.noUser && <li><span id="navLoggedInName">{ props.user.first }</span></li> }
                    { !props.user.noUser && <li id="navLoggedInPic"><img src={ `http://jawbone.com/${props.user.image}` } height="40px" /></li> }
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

// PropType validaiton
Navbar.propTypes = {
    user: React.PropTypes.object
};


/* -----------------    CONTAINER     ------------------ */

const mapProps = (state) => ({
    user: state.user
});
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(Navbar);
