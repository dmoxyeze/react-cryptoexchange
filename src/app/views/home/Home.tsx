import { url } from 'inspector';
import React, { useState } from 'react';
import Slider from 'react-slick';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Container, Row, Col, Button, Card, Tabs, Tab } from "react-bootstrap";
import {
    MDBCard,
    MDBCardBody,
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

import {
    AppRegistrationSharp as RegisterIcon,
    VerifiedSharp as VerifiedIcon,
    AccountBalanceWalletSharp as WalletIcon,
} from '@mui/icons-material';
import PriceList from '../../components/price-list';
import ExchangeComponent from '../../components/exchange-component';

export default function Home() {
    const currencies = [
        { name: 'Bitcoin', buy: 61006.30, sell: 61018.30, alias: 'BTC' },
        { name: 'Ethereum', buy: 4328.59, sell: 4330, alias: 'ETH' },
        { name: 'Litecoin', buy: 192.09, sell: 193, alias: 'LTC' },
        { name: 'Bitcoin Cash', buy: 579.63, sell: 580, alias: 'BCH' },
    ];
    const DTN = 411.10; // dollar to naira 
    const settings = {
        dots: false,
        arrows: false,
        speed: 2000,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    return (
        <>
            <section className="vh-100 section hero section-top py-5">
                <div style={{
                    backgroundImage: 'url(/images/endless-constellation.svg)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'repeat',
                }} className="bg-cover">
                </div>
                <div className="bg-overlay"></div>
                <Container className="">
                    <Row className="align-items-center">
                        <Col lg={7} xs={12} className="pt-md-3 mt-md-3">
                            <div className="">
                                <Slider {...settings}>
                                    <div>
                                        <h1 className="display-2 mt-md-3 text-light">
                                            Automatic Confirmations!
                                        </h1>
                                    </div>
                                    <div>
                                        <h1 className="display-2 mt-md-3 text-light">
                                            Secure and Convenient!
                                        </h1>
                                    </div>
                                    <div>
                                        <h1 className="display-2 mt-md-3 text-light">
                                            Modern and Innovative!
                                        </h1>
                                    </div>
                                </Slider>

                                <hr className="text-success w-75" />
                                <p className="fs-5 text-light">
                                    <span className="">React Crypto</span> is the easiest place to buy and sell digital
                                    currency.
                                </p>
                                <div className="d-none d-sm-block">
                                    <Button href="#" variant="success" className="me-2 p-md-3">Get Started</Button>
                                    <Button href="#" variant="outline-success" className="p-md-3">Learn How It Works</Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} xs={12} className="my-5">
                           <ExchangeComponent currencies={currencies} dtn={DTN}/>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg-body py-5 how-to">
                <MDBContainer className="stepContainer">
                    {/* For small Screen */}
                    <h2 className="text-center my-4 text--blue-dark text-capitalize">How It Works</h2>
                    <MDBRow center className="d-flex align-items-center">
                        <MDBCol md="7" className="">
                            <Timeline className="" key="small-screen" sx={{ display: { xs: 'block', sm: 'none' } }}>
                                <TimelineItem className="custom-timeline">
                                    <TimelineSeparator>
                                        <TimelineDot color="success" />
                                        <TimelineConnector color="success" />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <div className="text-center text-md-start mb-5 mb-md-0">
                                            <div className="text-success step mb-4">
                                                <img src="/images/sign-up.png" width="70" alt="" />
                                            </div>
                                            <h5 className="mb-3 text-capitalize">
                                                Register
                                            </h5>
                                            <p className="mb-0">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis itaque et odit, magnam sed blanditiis, iusto molestiae, vero nesciunt aut aperiam consequatur facere? Fuga, corrupti est hic voluptatum laboriosam porro.
                                            </p>
                                        </div>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem className="custom-timeline">
                                    <TimelineSeparator color="success">
                                        <TimelineDot color="success" />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <div className="text-center text-md-start mb-5 mb-md-0">
                                            <div className="text-success step mb-4">
                                                <img src="/images/fingerprint.png" alt="" width="70" />
                                            </div>
                                            <h5 className="mb-3 text-capitalize">
                                                Verify your email address
                                            </h5>
                                            <p className="mb-0">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis itaque et odit, magnam sed blanditiis, iusto molestiae, vero nesciunt aut aperiam consequatur facere? Fuga, corrupti est hic voluptatum laboriosam porro.
                                            </p>
                                        </div>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem className="custom-timeline">
                                    <TimelineSeparator>
                                        <TimelineDot color="success" />
                                        <TimelineConnector color="success" />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <div className="text-center text-md-start mb-5 mb-md-0">
                                            <div className="text-success step mb-4">
                                                <img src="/images/buying.png" alt="" width="70" />
                                            </div>
                                            <h5 className="mb-3 text-capitalize">
                                                Buy or sell digital currency
                                            </h5>
                                            <p className="mb-0">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis itaque et odit, magnam sed blanditiis, iusto molestiae, vero nesciunt aut aperiam consequatur facere? Fuga, corrupti est hic voluptatum laboriosam porro.
                                            </p>

                                        </div>
                                    </TimelineContent>
                                </TimelineItem>
                            </Timeline>
                            {/* For big screen */}
                            <Timeline key="big-screen" position="alternate" className="" sx={{ display: { xs: 'none', sm: 'block' } }}>
                                <TimelineItem className="custom-timeline">
                                    <TimelineSeparator>
                                        <TimelineDot color="success" />
                                        <TimelineConnector color="success" />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <div className="text-center text-md-start mb-5 mb-md-0">
                                            <div className="text-success step mb-4">
                                                <img src="/images/sign-up.png" width="70" alt="" />
                                            </div>
                                            <h5 className="mb-3 text-capitalize">
                                                Register
                                            </h5>
                                            <p className="mb-0">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis itaque et odit, magnam sed blanditiis, iusto molestiae, vero nesciunt aut aperiam consequatur facere? Fuga, corrupti est hic voluptatum laboriosam porro.
                                            </p>
                                        </div>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem className="custom-timeline">
                                    <TimelineSeparator color="success">
                                        <TimelineDot color="success" />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <div className="text-center text-md-start mb-5 mb-md-0">
                                            <div className="text-success step mb-4">
                                                <img src="/images/fingerprint.png" alt="" width="70" />
                                            </div>
                                            <h5 className="mb-3 text-capitalize">
                                                Verify your email address
                                            </h5>
                                            <p className="mb-0">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis itaque et odit, magnam sed blanditiis, iusto molestiae, vero nesciunt aut aperiam consequatur facere? Fuga, corrupti est hic voluptatum laboriosam porro.
                                            </p>
                                        </div>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem className="custom-timeline">
                                    <TimelineSeparator>
                                        <TimelineDot color="success" />
                                        <TimelineConnector color="success" />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <div className="text-center text-md-start mb-5 mb-md-0">
                                            <div className="text-success step mb-4">
                                                <img src="/images/buying.png" alt="" width="70" />
                                            </div>
                                            <h5 className="mb-3 text-capitalize">
                                                Buy or sell digital currency
                                            </h5>
                                            <p className="mb-0">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis itaque et odit, magnam sed blanditiis, iusto molestiae, vero nesciunt aut aperiam consequatur facere? Fuga, corrupti est hic voluptatum laboriosam porro.
                                            </p>

                                        </div>
                                    </TimelineContent>
                                </TimelineItem>
                            </Timeline>
                        </MDBCol>
                        <MDBCol md="5" className="order-xs-0 pb-5">
                            <h5 className="py-5">Exchange Rates</h5>
                            <PriceList currencies={currencies} className={'shadow-5-strong bg-success rate text-light'} />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            {/*<section className="section bg-success-light why">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol lg="7">

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            */}
        </>
    );
}
