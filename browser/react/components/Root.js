// Required packages
import React from 'react';

// Required files
import Navbar from './Navbar';

/* -----------------    COMPONENT     ------------------ */

const Root = (props) => {
    return (
        <div>
            <Navbar />
            { props.children }
        </div>
    );
};

// PropType validaiton
Root.propTypes = {
    children: React.PropTypes.object
};

export default Root;

/* -----------------    CONTAINER     ------------------ */
