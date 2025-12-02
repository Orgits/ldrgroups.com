import React from 'react';
import { Link } from 'react-router-dom';

function ServiceTen() {
    return (
        <div>
            {/* our service area start */}
            <div className="rts-service-area rts-section-gapTop pb--200 service-two-bg bg_image">
                <div className="container">
                    <div className="row g-5 service padding-controler">

                        {/* Manually added 30 services */}

                        {/* Service 1 */}


                        {/* Service 2 */}
                        <div className="col-xl-4 col-md-6 col-sm-12 col-12 pb--140 pb_md--100">
                            <div className="service-two-inner">
                                <Link to={'#'} >
                                    <img src="/assets/images/service/Reports & Certification.png" alt="Reports & Certification" />
                                </Link>
                                <div className="body-content">
                                    <h5 className="title">Reports & Certification</h5>
                                    <p className="dsic">
                                        Obtain detailed and reliable financial reports with certifications for legal compliance.
                                    </p>
                                    <Link className="rts-read-more-two color-primary" to={'#'}>
                                        Read More <i className="far fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="col-xl-4 col-md-6 col-sm-12 col-12 pb--140 pb_md--100">
                            <div className="service-two-inner">
                                <Link to={'#'} >
                                    <img src="/assets/images/service/Outsourcing Support Service.png" alt="Outsourcing Support" />
                                </Link>
                                <div className="body-content">
                                    <h5 className="title">Outsourcing Support</h5>
                                    <p className="dsic">
                                        Streamline your financial processes by outsourcing accounting, payroll, and reporting tasks.
                                    </p>
                                    <Link className="rts-read-more-two color-primary" to={'#'}>
                                        Read More <i className="far fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>



                        {/* Service 5 */}
                        <div className="col-xl-4 col-md-6 col-sm-12 col-12 pb--140 pb_md--100">
                            <div className="service-two-inner">
                                <Link to={'#'} >
                                    <img src="/assets/images/service/FEMA Advisory.png" alt="FEMA Advisory" />
                                </Link>
                                <div className="body-content">
                                    <h5 className="title">FEMA Advisory</h5>
                                    <p className="dsic">
                                        Navigate India's Foreign Exchange Management Act (FEMA) regulations with expert advisory.
                                    </p>
                                    <Link className="rts-read-more-two color-primary" to={'#'}>
                                        Read More <i className="far fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Service 6 */}
                        <div className="col-xl-4 col-md-6 col-sm-12 col-12 pb--140 pb_md--100">
                            <div className="service-two-inner">
                                <Link to={'#'} >
                                    <img src="/assets/images/service/Corporate Law.png" alt="Corporate Law" />
                                </Link>
                                <div className="body-content">
                                    <h5 className="title">Corporate Law</h5>
                                    <p className="dsic">
                                        Get expert legal solutions for company formation, mergers, acquisitions, and governance.
                                    </p>
                                    <Link className="rts-read-more-two color-primary" to={'#'}>
                                        Read More <i className="far fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Remaining Services (7-30) */}
                        {[
                            "NRI Tax Compliance",
                            "Regulatory Compliance for Business",
                            "Registration of Section 8 Company",
                            "Insolvency and Bankruptcy Code Services",
                            "FEMA Compliances and Compounding",
                            "FCRA Registration & Renewal",
                            "Accounts Outsourcing",
                            "TP Study & Report",
                            "Limited Liability Partnership",
                            "Branch Office in India",
                            "Joint Venture in India",
                            "Liaison Office",
                            "Incorporation of Company in India",
                            "Project Office",
                            "Setting Up NGOs",
                            "Remittance of Money by NRI from India",
                            "Start Up India Services",
                            "Certification and Attestation",
                            "STPI Related Services",
                            "Sez Related Services",
                            "Trademark Related Services",
                            "Legal Entity Identifier (LEI) Registration",
                            "Goods and Services Tax (GST)"
                        ].map((service, index) => (
                            <div key={index + 7} className="col-xl-4 col-md-6 col-sm-12 col-12 pb--140 pb_md--100">
                                <div className="service-two-inner">
                                    <Link to={"#"} >
                                        <img src={`/assets/images/service/${service}.png`} alt={service} />
                                    </Link>
                                    <div className="body-content">
                                        <h5 className="title">{service}</h5>
                                        <p className="dsic">Expert services to help manage {service.toLowerCase()} effectively.</p>
                                        <Link className="rts-read-more-two color-primary" to={"#"}>
                                            Read More <i className="far fa-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            {/* our service area end */}
        </div>
    );
}

export default ServiceTen;