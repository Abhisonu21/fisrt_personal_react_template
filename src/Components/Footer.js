import React from 'react';

const Footer = (props) => {
    return(
        <>
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-12 col-md-6 text-center">
                                    <p>Copyright &copy; {new Date().getFullYear()} <a href={props.url} target="_blank">{props.sitename}</a>. All Right Reserved |</p>
                                </div>

                                <div className="col-12 col-md-6 text-center">
                                    <p><a href={props.pageurl} target="_blank">{props.title}</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;