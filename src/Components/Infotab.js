import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import TabContent from './Tabcontent';
import Thumb1 from '../../src/img/thumbnail/thumb1.jpg';
import Comment from './Comment';
import Photo from './Photo';


const Infotab = (props) => {
    
    return(
        <div className="tab-wrapper">
            <div className='container-fluid' >
                <div className="row">
                    <div className="col-sm-12 margin-left-15">

                        <Tabs className="custom-tab" defaultActiveKey="journey">
                            <Tab eventKey="journey" title="Journey">   

                                <div className="main-content-body">
                                
                                    <TabContent main_user={Thumb1} user_name="Mahek Jain" subject="Review Recong Peo" duration="2 seconds"/>

                                    <Photo other_image1={Thumb1} other_image2={Thumb1} other_image3={Thumb1} other_image4={Thumb1} />

                                    <Comment comment="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." url="https://www.google.com" read="Read More"/>
                                </div>
                                
                                <div className="main-content-body">
                                    <TabContent main_user={Thumb1} user_name="Mahek Jain" subject="Review Recong Peo" duration="2 seconds" / >
                                    
                                    <Comment comment="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." url="https://www.google.com" read="Read More"/>
                                </div>

                                <div className="main-content-body">
                                    <TabContent main_user={Thumb1} user_name="Mahek Jain" subject="Review Recong Peo" duration="2 seconds" />

                                    <TabContent main_user={Thumb1} user_name="Kaza" location="Spiti Valley, Himachal Pradesh" aname="Add to Wishlist" />

                                    <Comment comment="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                                </div>

                                <div className="main-content-body">
                                    <TabContent main_user={Thumb1} user_name="Mahek Jain" subject="Review Recong Peo" duration="2 seconds" />
                                    
                                    <TabContent main_user={Thumb1} user_name="Shakshi Goel" location="New Delhi, India" aname="Follow" />

                                    <Comment comment="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                                </div>

                                <div className="main-content-body">

                                    <Comment faFont="map-pin" comment="This Journey is Started on 5th Jan 2015"/>
                                </div>
                            </Tab>

                            <Tab eventKey="reviews" title="Reviews">
                                <div className="tab-item-wrapper">
                                    
                                </div>
                            </Tab>

                            <Tab eventKey="photo" title="Photos">
                                <div className="tab-item-wrapper">
                                    <Photo other_image1={Thumb1} other_image2={Thumb1} other_image3={Thumb1} other_image4={Thumb1} />
                                </div>
                            </Tab>

                            <Tab eventKey="trips" title="Trips">
                                <div className="tab-item-wrapper">
                                   
                                </div>
                            </Tab>

                            <Tab eventKey="stats" title="Stats">
                                <div className="tab-item-wrapper">
                                    
                                </div>
                            </Tab>
                        </Tabs>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Infotab;