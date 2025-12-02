import React from 'react';
import { Link } from 'react-router-dom';

function ServiceOne() {
    return (
        <div>
            <>
                {/* rts service post area Start */}
                <div className="rts-service-area rts-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="rts-title-area service text-center">
                                    <p className="pre-title">Our Services</p>
                                    <h2 className="title">Your Complete Finance & Compliance Partner</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid service-main plr--120-service mt--50 plr_md--0 pl_sm--0 pr_sm--0">
                        <div className="background-service row">
                            {/* Service 1 - Statutory Audit */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner one">
                                    <div className="thumbnail">
                                        <img src="assets/images/service/icon/01.svg" alt="Statutory Audit" />
                                    </div>
                                    <div className="service-details">
                                        <Link to={'/service-details/statutory-audit'}>
                                            <h5 className="title">Statutory Audit</h5>
                                        </Link>
                                        <p
                                            className="disc"
                                            style={{ fontSize: '1.5rem', textAlign: 'justify' }}
                                        >
                                            We provide independent and reliable Statutory Audit services in compliance
                                            with the Companies Act and applicable regulations. Our audits go beyond
                                            checklist compliance to enhance transparency, strengthen internal controls,
                                            and build stakeholder confidence in your financial statements.
                                        </p>
                                        <Link className="rts-read-more btn-primary" to={'/service-details/statutory-audit'}>
                                            <i className="far fa-arrow-right" /> Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Service 2 - Internal Audit */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner two">
                                    <div className="thumbnail">
                                        <img src="assets/images/service/icon/02.svg" alt="Internal Audit" />
                                    </div>
                                    <div className="service-details">
                                        <Link to={'/service-details/internal-audit'}>
                                            <h5 className="title">Internal Audit</h5>
                                        </Link>
                                        <p
                                            className="disc"
                                            style={{ fontSize: '1.5rem', textAlign: 'justify' }}
                                        >
                                            Our Internal Audit services are designed to strengthen internal controls,
                                            improve risk management, and enhance operational efficiency. We don’t just
                                            review records — we work with management to identify gaps, recommend
                                            practical solutions, and support sustainable business growth.
                                        </p>
                                        <Link className="rts-read-more btn-primary" to={'/service-details/internal-audit'}>
                                            <i className="far fa-arrow-right" /> Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Service 3 - GST Compliance */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner three">
                                    <div className="thumbnail">
                                        <img src="assets/images/service/icon/03.svg" alt="GST Compliance" />
                                    </div>
                                    <div className="service-details">
                                        <Link to={'/service-details/gst-compliance'}>
                                            <h5 className="title">GST Compliance</h5>
                                        </Link>
                                        <p
                                            className="disc"
                                            style={{ fontSize: '1.5rem', textAlign: 'justify' }}
                                        >
                                            We provide end-to-end GST services including registration, return filing,
                                            ITC reconciliation, e-invoicing, and e-way bill compliance. Our experts help
                                            you avoid penalties, protect input tax credit, and structure transactions to
                                            minimize GST impact on your business.
                                        </p>
                                        <Link className="rts-read-more btn-primary" to={'/service-details/gst-compliance'}>
                                            <i className="far fa-arrow-right" /> Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Service 4 - Corporate Tax Filing */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner four">
                                    <div className="thumbnail">
                                        <img src="assets/images/service/icon/04.svg" alt="Corporate Tax Filing" />
                                    </div>
                                    <div className="service-details">
                                        <Link to={'/service-details/corporate-tax-filing'}>
                                            <h5 className="title">Corporate Tax Filing</h5>
                                        </Link>
                                        <p
                                            className="disc"
                                            style={{ fontSize: '1.5rem', textAlign: 'justify' }}
                                        >
                                            From computing taxable income to filing company ITRs, MAT/AMT compliance,
                                            and TDS/TCS reconciliation, we handle the full spectrum of corporate tax
                                            requirements. Our team focuses on accurate compliance while optimizing
                                            available deductions and incentives to reduce your overall tax burden.
                                        </p>
                                        <Link className="rts-read-more btn-primary" to={'/service-details/corporate-tax-filing'}>
                                            <i className="far fa-arrow-right" /> Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Service 5 - Bookkeeping Services */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner five">
                                    <div className="thumbnail">
                                        <img src="assets/images/service/icon/05.svg" alt="Bookkeeping Services" />
                                    </div>
                                    <div className="service-details">
                                        <Link to={'/service-details/bookkeeping'}>
                                            <h5 className="title">Bookkeeping Services</h5>
                                        </Link>
                                        <p
                                            className="disc"
                                            style={{ fontSize: '1.5rem', textAlign: 'justify' }}
                                        >
                                            We offer professional bookkeeping support covering day-to-day accounting,
                                            bank reconciliation, payables and receivables, and financial reporting.
                                            Our accurate, compliance-ready books give you clear visibility on cash flow
                                            and performance while freeing you to focus on core business growth.
                                        </p>
                                        <Link className="rts-read-more btn-primary" to={'/service-details/bookkeeping'}>
                                            <i className="far fa-arrow-right" /> Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Service 6 - Virtual CFO Services */}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="service-one-inner six">
                                    <div className="thumbnail">
                                        <img src="assets/images/service/icon/06.svg" alt="Virtual CFO Services" />
                                    </div>
                                    <div className="service-details">
                                        <Link to={'/service-details/virtual-cfo'}>
                                            <h5 className="title">Virtual CFO Services</h5>
                                        </Link>
                                        <p
                                            className="disc"
                                            style={{ fontSize: '1.5rem', textAlign: 'justify' }}
                                        >
                                            Our Virtual CFO Services give you strategic financial expertise without
                                            the cost of a full-time CFO. We support you with budgeting, cash flow
                                            management, MIS reporting, fundraising support, and compliance oversight so
                                            you can scale with strong financial governance.
                                        </p>
                                        <Link className="rts-read-more btn-primary" to={'/service-details/virtual-cfo'}>
                                            <i className="far fa-arrow-right" /> Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="row">
                            <div className="cta-one-bg col-12">
                                <div className="cta-one-inner">
                                    <div className="cta-left">
                                        <h3 className="title">
                                            Let's discuss how we can enhance your business success.
                                        </h3>
                                    </div>
                                    <div className="cta-right">
                                        <Link className="rts-btn btn-white" to="/contactus">
                                            Let's Work Together
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* rts service post area End */}
            </>
        </div>
    );
}

export default ServiceOne;