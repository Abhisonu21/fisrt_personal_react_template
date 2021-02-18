import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return(
        <>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <NavLink className="navbar-brand" to="/">Travel</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink activeClassName="active-class" exact className="nav-link" to="/">Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink activeClassName="active-class" className="nav-link" to="/about">About</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink activeClassName="active-class" className="nav-link" to="/main">Main</NavLink>
                        </li>
                    
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav> */}

            <section className="main-nav">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-xl-10 mx-auto">
                            <div className="row">
                                <div className="col-12 col-sm-4 col-xl-3 mb-2 mt-2 text-center text-sm-left">
                                    <div className="header-logo">
                                        <NavLink to="/" className="color-white font-size-18"><i className="fa fa-map-marker margin-right-10 color-black font-size-40" style={{verticalAlign: 'middle'}}></i> Travelsite.com</NavLink>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-8 col-xl-5 order-xl-12 color-white right-sec text-center text-sm-right mb-2 mt-2">
                                    <span><img src={props.userimage} alt={props.username} style={{width:'50px'}} /> {props.username}</span>

                                    <span className="margin-left-10"><i className="fa fa-rss-square margin-right-5"></i> Feeds</span>

                                    <span className="margin-left-10"><i className="fa fa-envelope font-size-18"></i><sup>10</sup></span>

                                    <span className="margin-left-10"><i className="fa fa-bell-o font-size-18"></i><sup>2</sup></span>

                                    <span className="margin-left-10"><i className="fa fa-cog font-size-18"></i></span>
                                </div>

                                <div className="col-12 col-xl-4 mb-2 mt-2 text-center">
                                    <form>
                                        <div class="form-group has-search">
                                            <span class="fa fa-search form-control-feedback"></span>
                                            <input type="text" class="form-control" placeholder="Search" />
                                        </div>
                                    </form>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Navbar
