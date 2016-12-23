// Required packages
import React from 'react';

/* -----------------    COMPONENT     ------------------ */

const LoadingIcon = (props) => {
    return (
        <div className="row" id="loader">
            <div className="col s4 offset-s4 center">
                <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div>
                        <div className="gap-patch">
                            <div className="circle"></div>
                        </div>
                        <div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingIcon;

/* -----------------    CONTAINER     ------------------ */
