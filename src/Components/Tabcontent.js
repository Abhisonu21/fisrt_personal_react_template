import React from 'react';
import Comment from './Comment';

const TabContent = (props) => {
    const isValue = !props.location;
    const isbtnName = !props.aname;
    return(
        <div className="tab-item-wrapper">
            <div className="tab-head">
                <img src={props.main_user} alt={props.user_name} className="img-fluid display-inline margin-right-10 img-sec"/> 
                
                <span className="margin-bottom-10"><b>{ props.user_name } <i className="fa fa-map-marker margin-right-10 margin-left-20" style={{ display: isValue ? "none" : "inline-block"  }}/>{props.location}</b> 
                
                <a href="#" class="btn btn-primary margin-left-15 margin-top-10" style={{ display: isbtnName ? "none" : "inline-block", padding: '1px 15px' }}>{props.aname}</a><br className="margin-top-10"/>{props.subject} <b>{props.subject1}</b></span>

                <p>{props.duration}</p>

                {/* <p className="margin-top-20 text-justify">{props.description} </p> */}
               
            </div>
        </div>
    );
};

export default TabContent;
