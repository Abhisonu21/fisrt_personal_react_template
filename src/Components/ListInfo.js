import React from 'react';

const ListInfo = (props) => {

    let lists = props.name.map((data,id) => {
        return <p key={id}>
                    <img src={data.img} style={{width:'40px'}} alt="mahek Jain" className="margin-right-10" />
                    <span className="font-bold">{data.name}</span> {props.review} <span className="font-bold">{props.pro}</span> {props.article} {data.duration}
                </p>
    })
    return(
        <>
            <div className="list-section margin-top-30">
                <h2 className="font-size-16 text-center padding-5">{props.Heading}</h2>

                <div className="listing">
                    {lists}
                </div>
            </div>
        </>
    );
};

export default ListInfo;