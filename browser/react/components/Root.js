// Required packages
import React from 'react';

// Required files
import Navbar from './Navbar';
import Graphs from './Graphs';

/* -----------------    COMPONENT     ------------------ */

const Root = (props) => {
    return (
        <div>
            <Navbar />
            { props.children }
        </div>
    );
};

export default Root;

/* -----------------    CONTAINER     ------------------ */
