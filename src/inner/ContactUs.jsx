
import React from 'react';
import HeaderOne from "../components/header/HeaderOne";
import { Link } from 'react-router-dom';
import FooterOne from "../components/footer/FooterOne";
import Breadcrumb from "./Breadcrumb";

function ContactUs() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Contact Us' }
    ];
    return (
        <div className=''>

            <HeaderOne />

            <Breadcrumb title="Contact Us" breadcrumbs={breadcrumbs} />

            {/* contact single area start */}
            <div className="rts-contact-area rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        {/* single contact area */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-contact-one-inner">
                                <div className="thumbnail">
                                    <img src="assets/images/contact/01.png" alt="" />
                                </div>
                                <div className="content">
                                    <div className="icone">
                                        <img src="assets/images/contact/shape/01.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <span>Call Us 24/7</span><br />
                                        <Link to={'tel:+91 92055 44540'}>
                                            <h7><b>+91 92055 44540</b></h7><br />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single contact area end */}
                       
                        {/* single contact area */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-contact-one-inner">
                                <div className="thumbnail">
                                    <img src="assets/images/contact/03.png" alt="" />
                                </div>
                                <div className="content">
                                    <div className="icone">
                                        <img src="assets/images/contact/shape/03.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <span>Walk In</span><br />
                                        <Link to={'#'}>
                                        <h8><b>7th Floor, Office No. 74D, Himalaya House KG Marg Area, ND - 110001</b></h8>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single contact area end */}
                         {/* single contact area */}
                         <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-contact-one-inner">
                                <div className="thumbnail">
                                    <img src="assets/images/contact/02.png" alt="" />
                                </div>
                                <div className="content">
                                    <div className="icone">
                                        <img src="assets/images/contact/shape/02.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <span>MAke A Quote</span><br />
                                        <Link to={'mailto:someone@example.com'}>
                                            <h7><b>Office@ldrgroups.com</b></h7>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single contact area end */}
                    </div>
                </div>
            </div>
            {/* conact single area end */}
            {/* bizup map area start */}
            <div className="rts-contact-map-area">
                <div className="contaciner-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-map-area-fluid">
                                <iframe
                                    className="contact-map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.055021879864!2d77.2215868!3d28.628113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd09dccf044f%3A0x527a2d401853b004!2sHimalaya%20house%20Cp!5e0!3m2!1sen!2sin!4v1740731893913!5m2!1sen!2sin"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                                <img
                                    className="location"
                                    src=""
                                    alt="Business_map"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* bizup map area end */}
            {/* conact us form fluid start */}
            <div className="rts-contact-form-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="rts-contact-fluid rts-section-gap">
                                <div className="rts-title-area contact-fluid text-center mb--50">
                                    <p className="pre-title">Get In Touch</p>
                                    <h2 className="title">Needs Help? Let’s Get in Touch</h2>
                                </div>
                                <div className="form-wrapper">
                                    <div id="form-messages" />
                                    <form id="contact-form">
                                        <div className="name-email">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                required=""
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                required=""
                                            />
                                        </div>
                                        <input type="text" name="subject" placeholder="Your Subject" />
                                        <textarea
                                            placeholder="Type Your Message"
                                            name="message"
                                            defaultValue={""}
                                        />
                                        <button type="submit" className="rts-btn btn-primary">
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* conact us form fluid end */}

            <FooterOne />

        </div>
    )
}

export default ContactUs