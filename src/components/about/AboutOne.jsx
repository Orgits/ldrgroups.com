import React, { useEffect } from 'react';
import WOW from 'wow.js';

function AboutOne() {
    useEffect(() => {
        const wow = new WOW({
            boxClass: 'wow',      
            animateClass: '',     
            offset: 0,            
            mobile: true,         
            live: true            
        });
        wow.init();
    }, []);

    return (
        <div>
            {/* rts about us section start */}
            <div className="rts-about-area rts-section-gap bg-about-sm-shape">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        {/* about left */}
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-md-2 order-sm-2 order-2 mt_md--50 mt_sm--50">
                            <div className="rts-title-area">
                                <p className="pre-title">More About Us</p>
                                <h3 className="title">Trusted Chartered Accountants & Strategic Partners for Business Growth</h3>
                            </div>
                            <div className="about-inner">
                                <p className="disc">
                                    <b>LDR Groups</b> is a leading <b>Chartered Accountancy & Business Consulting Firm</b> committed to delivering <b>strategic solutions</b> for businesses worldwide. Since 2017, we have been helping businesses <b>navigate complex financial landscapes, ensure compliance, and achieve sustainable growth.</b>
                                </p>
                                {/* start about success area */}
                                <div className="row about-success-wrapper">
                                    {/* left wrapper start */}
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Expert Chartered Accountants</p>
                                        </div>
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Comprehensive Business Consulting</p>
                                        </div>
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Strategic Financial Planning</p>
                                        </div>
                                    </div>
                                    {/* left wrapper end */}
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Taxation & Compliance Experts</p>
                                        </div>
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Audit & Assurance Services</p>
                                        </div>
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Startup & Business Advisory</p>
                                        </div>
                                    </div>
                                </div>
                                {/* start about success area */}
                                {/* about founder & get in touch start */}
                                <div className="row about-founder-wrapper align-items-center mt--40">
                                    {/* left area start */}
                                    {/* left area end */}
                                    {/* right founder area */}
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_sm--20">
                                        <div className="author-call-option">
                                            <img
                                                className="authore-call"
                                                src="assets/images/about/call.svg"
                                                alt="Call Us"
                                            />
                                            <div className="call-details">
                                                <span>Get in touch</span>
                                                <a href="tel:+91 92055 44540">
                                                    <h6 className="title">+91 92055 44540</h6>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* left founder area */}
                                </div>
                                {/* about founder & get in touch end */}
                            </div>
                        </div>
                        {/* about right */}
                        {/* about-right Start*/}
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-md-1 order-sm-1 order-1">
                            <div className="about-one-thumbnail">
                                <img
                                    src="assets/images/about/main/about-01.png"
                                    alt="About LDR Groups"
                                />
                                <img
                                    className="small-img"
                                    src="assets/images/about/main/about-02.png"
                                    alt="LDR Groups-small"
                                />
                                <div className="experience">
                                    <div className="left single">
                                        <h2 className="title"><b>8+</b></h2>
                                        <p className="time">Years</p>
                                    </div>
                                    <div className="right single">
                                        <p className="disc">Of Experience in Financial & Business Consulting</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* about-right end */}
                    </div>
                </div>
            </div>
            {/* rts about us section end */}
        </div>
    );
}

export default AboutOne;