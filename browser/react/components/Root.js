// Required packages
import React from 'react';

// Required files
import Navbar from './Navbar';
import SingleGraph from './SingleGraph'

/* -----------------    COMPONENT     ------------------ */

export default () => (
    <div>
        <Navbar />
        <SingleGraph dayIndex={0}/>
    </div>
);

/* -----------------    CONTAINER     ------------------ */
