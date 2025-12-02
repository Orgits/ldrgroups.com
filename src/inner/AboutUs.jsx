
import React, { useState, useEffect } from 'react';
import HeaderOne from "../components/header/HeaderOne";
import Breadcrumb from "./Breadcrumb";
import { Link } from 'react-router-dom';
import TeamTwo from "../components/team/TeamTwo";
import FooterOne from "../components/footer/FooterOne";

import Accordion from 'react-bootstrap/Accordion';
import FooterFour from '../components/footer/FooterFour';

function OurService() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'About Us' }
    ];
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    // Function to open the video overlay
    const openVideo = (e) => {
        e.preventDefault();
        setIsVideoOpen(true);
    };

    // Function to close the video overlay
    const closeVideo = (e) => {
        e.preventDefault();
        setIsVideoOpen(false);
    };

    // Effect to handle the escape key for closing the video overlay
    useEffect(() => {
        const handleKeyUp = (e) => {
            if (e.keyCode === 27) {
                setIsVideoOpen(false);
            }
        };

        // Add event listener for keyup
        document.addEventListener('keyup', handleKeyUp);

        // Cleanup function to remove event listener on component unmount
        return () => {
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);
    return (
        <div className=''>

            <HeaderOne />
            <Breadcrumb title="About Us" breadcrumbs={breadcrumbs} />
            {/* rts about us section start */}
            <div className="rts-about-area rts-section-gap">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-image-v-inner">
                                <div className="image-area">
                                    <img
                                        className="mt--110 img-1"
                                        src="assets/images/about/main/about-03.jpg"
                                        alt="Business_image"
                                    />
                                    <img
                                        className="img-over"
                                        src="assets/images/about/main/about-04.jpg"
                                        alt="Business_image"
                                    />
                                    <div className="goal-button-wrapper">
                                        <Link to={'#'} className="vedio-icone">
                                            <span id="play-video" className="video-play-button" onClick={openVideo}>
                                                <span />
                                            </span>
                                            {isVideoOpen && (
                                                <div id="video-overlay" className="video-overlay open">
                                                    {/* Close button for the video overlay */}
                                                    <Link className="video-overlay-close" to={'#'} onClick={closeVideo}>
                                                        ×
                                                    </Link>
                                                    {/* Video iframe */}
                                                    <iframe
                                                        width="560"
                                                        height="315"
                                                        src="https://www.youtube.com/embed/6stlCkUDG_s"
                                                        title="YouTube video player"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                            )}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-progress-inner">
                                <div className="title-area">
                                    <span>PREMIER CHARTERED ACCOUNTANCY FIRM</span>
                                    <h2 className="title">
                                        Empowering Businesses with Expert Financial Guidance
                                    </h2>
                                </div>
                                {/* inner start */}
                                <div className="inner">
                                    <p className="disc">
                                        LDR Groups is a premier chartered accountancy and business consulting firm, dedicated to providing strategic financial, tax, and compliance solutions for businesses of all sizes. Established in 2017, we specialize in audit & assurance, taxation, business compliance, corporate law, and financial advisory services.
                                    </p>
                                    <div className="rts-progress-one-wrapper">
                                        <div className="single-progress">
                                            <div className="progress-top">
                                                <p className="progress-title">Statutory Audit</p>
                                            </div>
                                        </div>
                                        <div className="single-progress">
                                            <div className="progress-top">
                                                <p className="progress-title">Corporate Tax Filing</p>
                                            </div>
                                        </div>
                                        <div className="single-progress">
                                            <div className="progress-top">
                                                <p className="progress-title">Bookkeeping Services</p>
                                            </div>
                                        </div>
                                        <div className="single-progress">
                                            <div className="progress-top">
                                                <p className="progress-title">Virtual CFO Services & More</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={'/contactus'} className="rts-btn btn-primary">
                                        Contact Us
                                    </Link>
                                </div>
                                {/* end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts about us section end */}


            {/* rts services area start */}
            <div className="rts-service-area rts-section-gapBottom">
                <div className="container-fluid service-main about-service-width-controler">
                    <div className="background-service service-three row">
                        <div className="row g-5">
                            <div className="rts-title-area service-four text-center pt--40 pt_md--0 mt_sm--0 mt_md--0">
                                <p className="pre-title">Our Expertise</p>
                                <h2 className="title">What We Provide</h2>
                            </div>
                            {/* start single Service */}
                            <div className="col-xl-4 col-md-6 col-sm-12 col-12 pt--15 mb--80 mb_md--40 mb_sm--30">
                                <div className="service-one-inner-four">
                                    <div className="big-thumbnail-area">
                                        <Link to={'#'} className="thumbnail">
                                            <img
                                                src="assets/images/service/07.jpg"
                                                alt="Business-service"
                                            />
                                        </Link>
                                        <div className="content">
                                            <img
                                                src="assets/images/service/icon/13.svg"
                                                alt="Business-icon"
                                            />
                                            <h5 className="title">Statutory Audit</h5>
                                            <p className="disc">
                                                We provide independent and reliable Statutory Audit services in compliance with the Companies Act and applicable regulations. Our audits go beyond checklist compliance to enhance transparency, strengthen internal controls, and build stakeholder confidence in your financial statements.
                                            </p>
                                        </div>
                                        <Link href="service-details.html" className="over_link" />
                                    </div>
                                    <Link href="service-details.html" className="rts-btn btn-primary">
                                        {" "}
                                        Read More
                                        <i className="fal fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                            {/* start single Service */}
                            <div className="col-xl-4 col-md-6 col-sm-12 col-12 pt--15 mb--80 mb_md--40 mb_sm--30">
                                <div className="service-one-inner-four">
                                    <div className="big-thumbnail-area">
                                        <Link to={'#'} className="thumbnail">
                                            <img
                                                src="assets/images/service/08.jpg"
                                                alt="Business-service"
                                            />
                                        </Link>
                                        <div className="content">
                                            <img
                                                src="assets/images/service/icon/14.svg"
                                                alt="Business-icon"
                                            />
                                            <h5 className="title">GST Compliance</h5>
                                            <p className="disc">We provide end-to-end GST services including registration, return filing, ITC reconciliation, e-invoicing, and e-way bill compliance. Our experts help you avoid penalties, protect input tax credit, and structure transactions to minimize GST impact on your business.</p>
                                        </div>
                                        <Link href="service-details.html" className="over_link" />
                                    </div>
                                    <Link href="service-details.html" className="rts-btn btn-primary">
                                        {" "}
                                        Read More
                                        <i className="fal fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                            {/* start single Service */}
                            <div className="col-xl-4 col-md-6 col-sm-12 col-12 pt--15 mb--80">
                                <div className="service-one-inner-four">
                                    <div className="big-thumbnail-area">
                                        <Link to={'#'} className="thumbnail">
                                            <img
                                                src="assets/images/service/09.jpg"
                                                alt="Business-service"
                                            />
                                        </Link>
                                        <div className="content">
                                            <img
                                                src="assets/images/service/icon/15.svg"
                                                alt="Business-icon"
                                            />
                                            <h5 className="title">Corporate Tax Filing</h5>
                                            <p className="disc">
                                                From computing taxable income to filing company ITRs, MAT/AMT compliance, and TDS/TCS reconciliation, we handle the full spectrum of corporate tax requirements. Our team focuses on accurate compliance while optimizing available deductions and incentives to reduce your overall tax burden.
                                            </p>
                                        </div>
                                        <Link href="service-details.html" className="over_link" />
                                    </div>
                                    <Link href="service-details.html" className="rts-btn btn-primary">
                                        {" "}
                                        Read More
                                        <i className="fal fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="cta-one-bg col-12">
                            <div className="cta-one-inner">
                                <div className="cta-left">
                                    <h3 className="title animated fadeIn">
                                        Let’s discuss how we can help your business grow and thrive.
                                    </h3>
                                </div>
                                <div className="cta-right">
                                    <Link className="rts-btn btn-white" to={'#'}>
                                        Let's Work Together
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts services area End */}

            <TeamTwo />


            {/* rts faq section area */}
            <div className="rts-faq-section rts-section-gap rts-faq-bg bg_image">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="faq-two-inner">
                                <div className="title-area-faq">
                                    <span className="sub">WHY CHOOSE US</span>
                                    <h2 className="title">
                                        We Are Experienced
                                        <span className="sm-title">
                                            <span> Financial Experts</span>
                                        </span>
                                    </h2>
                                </div>
                                {/* faq accordion area */}
                                <div className="faq-accordion-area">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree"
                                                >

                                                </button>
                                            </h2>
                                            <div
                                                id="collapseThree"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingThree"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    Our expert team offers strategic financial planning, tax optimization, risk assessment, and business advisory services to ensure your business stays compliant and financially strong. We provide tailored solutions to enhance profitability, improve cash flow, and support expansion.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header><span>01. </span> What services does LDR Groups offer?</Accordion.Header>
                                            <Accordion.Body>
                                                LDR Groups provides a wide range of services, including audit & assurance, taxation, GST compliance, business consulting, corporate law advisory, financial management, and international taxation. We also assist startups, SMEs, and large enterprises with legal and regulatory compliance.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header><span>02. </span> How can LDR Groups help my business grow?</Accordion.Header>
                                            <Accordion.Body>
                                                Our expert team offers strategic financial planning, tax optimization, risk assessment, and business advisory services to ensure your business stays compliant and financially strong. We provide tailored solutions to enhance profitability, improve cash flow, and support expansion.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header><span>03. </span> How do I get started with LDR Groups?</Accordion.Header>
                                            <Accordion.Body>
                                                You can contact us via phone, email, or our website contact form to schedule a consultation. Our team will assess your business needs and provide customized solutions to help you achieve your financial and operational goals. 🚀
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                                {/* faq accordion area end */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="thumbnail-faq-four">
                                <img src="assets/images/faq/02.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts faq section area End */}


            {/* customers feed back area start */}
            <div className="rts-customer-feedback-area rts-section-gap bg-customer-feedback">
                <div className="container">
                    <div className="row">
                        <div className="rts-title-area feedback team text-center">
                            <p className="pre-title">Feedbacks</p>
                            <h2 className="title">Customer Feedbacks</h2>
                        </div>
                    </div>
                    <div className="row g-5 mt--20">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="testimopnial-wrapper-two">
                                <div className="test-header">
                                    <div className="thumbnail">
                                        <img src="assets/images/testimonials/02.png" alt="" />
                                    </div>
                                    <div className="name-desig">
                                        <h5 className="title">David Smith</h5>
                                        <span className="designation">Business Expert</span>
                                    </div>
                                </div>
                                <div className="test-body">
                                    <p className="disc">
                                        “Parallel task user friendly convergence through supply are
                                        chains type siflify reliable meta provide service visionary
                                        sources unleash tactical thinking via granular intellectual
                                        capital architect dynamic information value online business
                                        solution services”
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="testimopnial-wrapper-two">
                                <div className="test-header">
                                    <div className="thumbnail">
                                        <img src="assets/images/testimonials/03.png" alt="" />
                                    </div>
                                    <div className="name-desig">
                                        <h5 className="title">David Smith</h5>
                                        <span className="designation">Business Expert</span>
                                    </div>
                                </div>
                                <div className="test-body">
                                    <p className="disc">
                                        “Parallel task user friendly convergence through supply are
                                        chains type siflify reliable meta provide service visionary
                                        sources unleash tactical thinking via granular intellectual
                                        capital architect dynamic information value online business
                                        solution services”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* customers feed back area end */}


            <FooterFour />

        </div>
    )
}

export default OurService