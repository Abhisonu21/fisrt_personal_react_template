import React from 'react';

const MainHeader = (props) => {
    return(
        <>
            <section className="main-section" style={{backgroundImage: `url(${props.Background})`}}></section>

            <section className="position-relative no-padding" style={{display: props.disp}}>
                <div className="inner-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-xl-10 mx-auto">
                                <div className="row">
                                    <div className="col-12 col-md-8 col-lg-8">
                                        <div className="row">
                                            <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                                                <img src={props.imgsrc} class="img-fluid display-inline margin-bottom-15" alt="thumb1" />
                                            </div>

                                            <div className="col-12 col-sm-7 col-md-8 col-lg-9 info-sec">
                                                <h2 className="font-size-22">{props.name} <span className="follow bg-green font-size-16 font-normal">Follow</span></h2>
                                                <p><i className="fa fa-map-marker margin-right-10"></i>{props.location}</p>

                                                <p className="font-size-14">{props.info}</p>
                                                <p className="font-size-14">
                                                    <span className="font-size-12 margin-right-10"><i className="fa fa-file-text-o margin-right-5 font-size-18"></i>Wishlist (10)</span>

                                                    <span className="font-size-12 margin-right-10"><i className="fa  fa-smile-o margin-right-5 font-size-18"></i>Buddy List (55)</span>

                                                    <span className="font-size-12 margin-right-10"><i className="fa fa-user-plus margin-right-5 font-size-18"></i>Following (20)</span>

                                                    <span className="font-size-12 margin-right-10"><i className="fa fa-user-plus margin-right-5 font-size-18"></i>followers (125)</span>
                                                
                                                </p>
                                            </div>
                                        </div>
                                    </div>
        
                                    <div className="col-12 col-md-4 col-lg-4 info-sec">
                                        <h2 className="text-md-right text-center font-size-22">Rank: # 45</h2>
                                        <p><span><i className="fa fa-signal"></i> 2</span> <span className="display-inline" style={{width: '88%'}}><span className="progress"><span className="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></span></span></span></p>

                                        <p className="text-md-right text-center">
                                            <a href="#" target="_blank" className="color-white margin-right-10 font-size-18"><i className="fa fa-facebook"></i></a>

                                            <a href="#" target="_blank" className="color-white margin-right-10 font-size-18"><i className="fa fa-twitter"></i></a>

                                            <a href="#" target="_blank" className="color-white margin-right-10 font-size-18"><i className="fa fa-share-alt"></i></a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>       
                </div>
            </section>
        </>
    );
}

export default MainHeader;
