import React from 'react';

const Information = (props) => {
    return( <p>{props.Disp} <a href={props.Web}>Read More</a></p>);
};

export default Information;