import React from 'react';

const Photo = (props) => {
    return(
        <div className="margin-top-50">
            <img src={props.other_image1} alt={props.other_image1} className="img-fluid display-inline margin-right-10 margin-bottom-10" style={{width: '80px'}} />

            <img src={props.other_image2} alt={props.other_image2} className="img-fluid display-inline margin-right-10 margin-bottom-10" style={{width: '80px'}} />

            <img src={props.other_image3} alt={props.other_image3} className="img-fluid display-inline margin-right-10 margin-bottom-10" style={{width: '80px'}} />

            <img src={props.other_image4} alt={props.other_image4} className="img-fluid display-inline margin-right-10 margin-bottom-10" style={{width: '80px'}} />

            <img src={props.other_image5} alt={props.other_image5} className="img-fluid display-inline margin-right-10 margin-bottom-10" style={{width: '80px'}} />

            <img src={props.other_image6} alt={props.other_image6} className="img-fluid display-inline margin-right-10 margin-bottom-10" style={{width: '80px'}} />
        </div>
    );
};

export default Photo;
