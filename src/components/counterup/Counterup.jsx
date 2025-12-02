import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function Counterup() {

    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.5 });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.5 });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.5 });
    const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.5 });

    return (
        <div>
            <div className="rts-counter-up-area rts-section-gap counter-bg">
                <div className="container">
                    <div className="row">

                        {/* Counter 1 */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-counter">
                                <img src="assets/images/counterup/icon/01.svg" alt="Business_counter" />
                                <div ref={ref1} className="counter-details">
                                    {inView1 && (
                                        <h2 className="title counter">
                                            <CountUp start={0} end={700} duration={1} />
                                        </h2>
                                    )}
                                    <p className="disc">Successful Clients</p>
                                </div>
                            </div>
                        </div>

                        {/* Counter 2 */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-counter">
                                <img src="assets/images/counterup/icon/02.svg" alt="Business_counter" />
                                <div ref={ref2} className="counter-details">
                                    {inView2 && (
                                        <h2 className="title counter">
                                            <CountUp start={0} end={1200} duration={1} />
                                        </h2>
                                    )}
                                    <p className="disc">Projects Completed</p>
                                </div>
                            </div>
                        </div>

                        {/* Counter 3 */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-counter">
                                <img src="assets/images/counterup/icon/03.svg" alt="Business_counter" />
                                <div ref={ref3} className="counter-details">
                                    {inView3 && (
                                        <h2 className="title counter">
                                            <CountUp start={0} end={50} duration={1} />
                                        </h2>
                                    )}
                                    <p className="disc">Industries Served</p>
                                </div>
                            </div>
                        </div>

                        {/* Counter 4 */}
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-counter">
                                <img src="assets/images/counterup/icon/04.svg" alt="Business_counter" />
                                <div ref={ref4} className="counter-details">
                                    {inView4 && (
                                        <h2 className="title counter">
                                            <CountUp start={0} end={250} duration={1} />
                                        </h2>
                                    )}
                                    <p className="disc">Expert Consultants</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Counterup;