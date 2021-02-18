import React from 'react';
import MainHeader from './Mainheader';
import Background from '../../src/img/sliderbg/img1.jpg';
import Thumb1 from '../../src/img/thumbnail/thumb1.jpg';
import Info from './Information';
import TabInfo from './TabInfo';
import ListInfo from './ListInfo';
import Footer from './Footer';
import Nav from './Navbar';
import Infotab from './Infotab';

const Home = () => {

    let  reviews = [
        {
            'img':'static/media/thumb1.e1168aa1.jpg',
            'name': 'Mehak Jain',
            'duration':'2 Months ago',
        },
        {
            'img':'static/media/thumb1.e1168aa1.jpg',
            'name': 'Mehak Jain',
            'duration':'2 Months ago',  
        },
        {
            'img':'static/media/thumb1.e1168aa1.jpg',
            'name': 'Mehak Jain',
            'duration':'2 Months ago',  
        },
        {
            'img':'static/media/thumb1.e1168aa1.jpg',
            'name': 'Mehak Jain',
            'duration':'2 Months ago',  
        },
        {
            'img':'static/media/thumb1.e1168aa1.jpg',
            'name': 'Mehak Jain',
            'duration':'2 Months ago',  
        },
        {
            'img':'static/media/thumb1.e1168aa1.jpg',
            'name': 'Mehak Jain',
            'duration':'2 Months ago',  
        },
        {
            'img':'static/media/thumb1.e1168aa1.jpg',
            'name': 'Mehak Jain',
            'duration':'2 Months ago',  
        },
        {
            'img':'static/media/thumb1.e1168aa1.jpg',
            'name': 'Mehak Jain',
            'duration':'2 Months ago',  
        },
    ];

    let  trip = [
        {
            'img':'static/media/thumb1.e1168aa1.jpg',
            'name': 'Mehak Jain',
            'duration':'2 Months ago',
        },
        {
            'img':'static/media/thumb1.e1168aa1.jpg',
            'name': 'Mehak Jain',
            'duration':'2 Months ago',  
        },
        {
            'img':'static/media/thumb1.e1168aa1.jpg',
            'name': 'Mehak Jain',
            'duration':'2 Months ago',  
        },
        {
            'img':'static/media/thumb1.e1168aa1.jpg',
            'name': 'Mehak Jain',
            'duration':'2 Months ago',  
        },
        {
            'img':'static/media/thumb1.e1168aa1.jpg',
            'name': 'Mehak Jain',
            'duration':'2 Months ago',  
        },
        {
            'img':'static/media/thumb1.e1168aa1.jpg',
            'name': 'Mehak Jain',
            'duration':'2 Months ago',  
        },
        {
            'img':'static/media/thumb1.e1168aa1.jpg',
            'name': 'Mehak Jain',
            'duration':'2 Months ago',  
        },
        {
            'img':'static/media/thumb1.e1168aa1.jpg',
            'name': 'Mehak Jain',
            'duration':'2 Months ago',  
        },
    ]
    return(
        <>
            <Nav userimage={Thumb1} username="Sanjay Singh" />

            <MainHeader name="Mahek Jain" Background = {Background} imgsrc={Thumb1} disp="block" location="New Delhi, India" info="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>

            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-xl-10 mx-auto">
                            <div className="row">
                                <div className="col-12 col-lg-8">
                                    <div className="col margin-bottom-30">
                                        <Info Disp="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." Web="https://www.google.com"/>
                                    </div>
                                    
                                    <div className="col">
                                        <Infotab/>
                                        

                                        {/* <Infotab main_user={Thumb1} user_name="Mahek Jain" subject="Review Recong Peo" duration="2 seconds" disp="none" description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." url="https://www.google.com"/>

                                        <Infotab main_user={Thumb1} user_name="Mahek Jain" subject="Review Recong Peo" duration="2 seconds" other_image1={Thumb1} other_image2={Thumb1} other_image3={Thumb1} other_image4={Thumb1} disp="block" description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." url="https://www.google.com"/> */}
                                    </div>

                                    
                                </div>

                                <div className="col-12 col-lg-4">
                                    <TabInfo/>

                                    <ListInfo Heading="Popular reviews by Mehak Jain" name={reviews} review="Reviewd" pro="Recong Pro" />

                                    <ListInfo Heading="Popular trips by Mehak Jain" name={trip} review="added trip to" pro="Recong Pro" article="on" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            

            <Footer url="https://www.travelsite.com" sitename="travelsite.com" pageurl="https://www.travelsite.com/policy" title="Disclaimer & Privacy Policy"/>
        </>
    );
};

export default Home;