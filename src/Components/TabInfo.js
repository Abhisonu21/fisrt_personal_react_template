import React from 'react';

const TabInfo = () => {
    return(
        <>
            <div className="tab-sec">
                <p className="font-size-18 margin-bottom-15">
                    <i className="fa fa-map-marker margin-right-10 font-size-20"></i> Journey
                </p>
                <p className="font-size-18 margin-bottom-15">
                    <i className="fa fa-pencil margin-right-10 font-size-20"></i> Reviews
                </p>
                <p className="font-size-18 margin-bottom-15">
                    <i className="fa fa-camera margin-right-10 font-size-20"></i> Photos
                </p>
                <p className="font-size-18 margin-bottom-15">
                    <i className="fa fa-suitcase margin-right-10 font-size-20"></i> Trips
                </p>
                <p className="font-size-18 margin-bottom-15">
                    <i className="fa fa-bar-chart margin-right-10 font-size-20"></i> Stats
                </p>
            </div>
        </>
    );
};

export default TabInfo;