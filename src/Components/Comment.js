import React from 'react';

const Comment = (props) => {
    const fontAwe = !props.faFont;
    return(
        <>
            <p className="text-justify margin-top-15"><i className={`fa fa-${props.faFont} margin-right-10`} style={{display: fontAwe ? "none" : "inline-block"}}/>{props.comment} <a href={props.url}>{props.read}</a></p>
        </>
    );
}

export default Comment;