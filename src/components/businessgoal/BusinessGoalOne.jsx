import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BusinessGoalOne() {
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

        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return (
        <div>
            {/* business goal area */}
            <div className="rts-business-goal mt--0 rts-section-gapBottom" id="goal">
                <div className="container">
                    <div className="row">
                        {/* business goal left */}
                        <div className="col-lg-6">
                            <div className="business-goal-one">
                                <img src="assets/images/business-goal/01.jpg" alt="Business_Goal" />
                                <img
                                    className="small"
                                    src="assets/images/business-goal/sm-01.jpg"
                                    alt="Business_Goal"
                                />
                            </div>
                        </div>
                        {/* business goal right */}
                        <div className="col-lg-6 mt--35 mt_md--70 mt_sm--70">
                            <div className="business-goal-right">
                                <div className="rts-title-area business text-start pl--30">
                                    <p className="pre-title">AUDIT, TAXATION & COMPLIANCE EXCELLENCE</p>
                                    <h3 className="title">
                                        Empowering Businesses with Trust, Accuracy & Regulatory Confidence
                                    </h3>
                                </div>
                                <div className="rts-business-goal pl--30">
                                    <div className="single-goal">
                                        <img
                                            src="assets/images/business-goal/icon/01.svg"
                                            alt="business_Icon"
                                            className="thumb"
                                        />
                                        <div className="goal-wrapper">
                                            <h6 className="title">Audit, Tax & Regulatory Expertise</h6>
                                            <p className="disc">
                                                From statutory and internal audits to GST and corporate tax filing, we
                                                deliver precise, compliant and insight-driven services that strengthen
                                                governance, improve controls and support better decision-making.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="single-goal">
                                        <img
                                            src="assets/images/business-goal/icon/02.svg"
                                            alt="business_Icon"
                                            className="thumb"
                                        />
                                        <div className="goal-wrapper">
                                            <h6 className="title">End-to-End Support for Businesses & NRIs</h6>
                                            <p className="disc">
                                                We act as a long-term partner with bookkeeping, payroll, virtual CFO
                                                support, NRI and cross-border taxation, ROC and FEMA compliance, so you
                                                can focus on growth while we manage the complexity.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="goal-button-wrapper mt--70">
                                        <Link to="/contactus" className="rts-btn btn-primary color-h-black">
                                            Contact Us
                                        </Link>
                                        <div className="vedio-icone">
                                            {/* Video Play Button */}
                                            <Link
                                                id="play-video"
                                                className="video-play-button"
                                                to="#"
                                                onClick={openVideo}
                                            >
                                                <span />
                                                <span className="outer-text">Watch Video</span>
                                            </Link>
                                            {/* Video Overlay */}
                                            {isVideoOpen && (
                                                <div id="video-overlay" className="video-overlay open">
                                                    {/* Close button for the video overlay */}
                                                    <Link
                                                        className="video-overlay-close"
                                                        to="#"
                                                        onClick={closeVideo}
                                                    >
                                                        ×
                                                    </Link>
                                                    {/* Video iframe */}
                                                    
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* right area business End */}
                    </div>
                </div>
            </div>
            {/* business goal area End */}
        </div>
    );
}

export default BusinessGoalOne;