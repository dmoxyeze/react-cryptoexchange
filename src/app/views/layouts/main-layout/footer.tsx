import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className='text-center text-lg-start footer text-light pt-5' tag="div">
            <div className="container">
                <MDBContainer className=''>
                    <MDBRow className="gx-5">
                        <MDBCol lg='4' md='4' className='mb-4 mb-md-0 align-items-center'>
                            <h5 className='text-capitalize text-light text-start'>
                                React Crypto
                            </h5>
                            <div className="separator"></div>
                            <p className="text-start">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quasi deleniti eligendi itaque cupiditate quo mollitia! Voluptatem officia harum, voluptatum laudantium quaerat deleniti a culpa! Deleniti dolor quo possimus voluptatum.
                            </p>
                        </MDBCol>

                        <MDBCol lg='4' md='4' className='mb-4 mb-md-0 text-start'>
                            <h5 className='text-capitalize text-light text-start'>General</h5>
                            <div className="separator"></div>
                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-light'>
                                        News
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-light'>
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-light'>
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol lg='4' md='4' className='mb-4 mb-md-0 text-start'>
                            <h5 className='text-capitalize text-light text-start'>General</h5>
                            <div className="separator"></div>
                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-light'>
                                        Aml Policy
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-light'>
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-light'>
                                        Terms and Conditions
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
            <div className='text-center p-3 bg-secondary'>
                <a className='text--accent me-1' href='#'>
                    React Crypto
                </a>
                &copy; {new Date().getFullYear()}{' '}

                <ul className="list-unstyled">
                    <li className="nav-item-divider">
                        <span className="nav-link">
                            <span></span>
                        </span>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="text--accent">
                            <i className="fab fa-facebook" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="text--accent">
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="text--accent">
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </MDBFooter>
    );
}