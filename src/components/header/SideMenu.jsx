import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function SideMenu({ isSidebarOpen, toggleSidebar }) {

    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menuhome) => {
        setOpenMenu(openMenu === menuhome ? null : menuhome);
    };


    // useEffect(() => {
    //     const sidebar = document.getElementById('side-bar');
    //     const anywhereHome = document.getElementById('anywhere-home');

    //     if (isSidebarOpen) {
    //         sidebar.classList.add('show');
    //         anywhereHome.classList.add('bgshow');
    //     } else {
    //         sidebar.classList.remove('show');
    //         anywhereHome.classList.remove('bgshow');
    //     }
    // }, [isSidebarOpen]);


    return (
        <div>
            <div id="side-bar" className={`side-bar ${isSidebarOpen ? 'show' : ''}`}>
                <button className="close-icon-menu" aria-label="Close Menu" onClick={toggleSidebar}>
                    <i className="far fa-times"></i>
                </button>
                {/* inner menu area desktop start */}
                <div className="rts-sidebar-menu-desktop">
                    <Link className="logo-1" href="/assets/images/logo/logo.svg">
                        <img
                            className="logo"
                            src="/assets/images/logo/logo.svg"
                            alt="LDR Groups_logo"
                        />
                    </Link>
                    <Link className="logo-2" href="index.html">
                        <img
                            className="logo"
                            src="/assets/images/logo/logo-4.svg"
                            alt="LDR Groups_logo"
                        />
                    </Link>
                    <Link className="logo-3" href="index.html">
                        <img
                            className="logo"
                            src="/assets/images/logo/logo-3.svg"
                            alt="LDR Groups_logo"
                        />
                    </Link>
                    <Link className="logo-4" href="index.html">
                        <img
                            className="logo"
                            src="/assets/images/logo/logo-5.svg"
                            alt="LDR Groups_logo"
                        />
                    </Link>
                    <div className="body d-none d-xl-block">
                        <p className="disc">
                        LDR Groups is a professional audit, tax, and compliance advisory firm supporting businesses with accurate, transparent, and reliable financial solutions.
                        </p>
                        <div className="get-in-touch">
                            {/* title */}
                            <div className="h6 title">Get In Touch</div>
                            {/* title End */}
                            <div className="wrapper">
                                {/* single */}
                                <div className="single">
                                    <i className="fas fa-phone-alt" />
                                    <Link href="tel:+919205544540">+91 92055 44540</Link>
                                </div>
                                {/* single ENd */}
                                {/* single */}
                                <div className="single">
                                    <i className="fas fa-envelope" />
                                    <Link href="mailto:Office@ldrgroups.com">Office@ldrgroups.com</Link>
                                </div>
                                {/* single ENd */}
                                {/* single */}
                                <div className="single">
                                    <i className="fas fa-globe" />
                                    <Link href="#">ldrgroups.in</Link>
                                </div>
                                {/* single ENd */}
                                {/* single */}
                                <div className="single">
                                    <i className="fas fa-map-marker-alt" />
                                    <Link href="#">7th Floor, Office No. 74D, Himalaya House KG Marg Area, ND - 110001</Link>
                                </div>
                                {/* single ENd */}
                            </div>
                            <div className="social-wrapper-two menu">
                                <Link href="#">
                                    <i className="fab fa-facebook-f" />
                                </Link>
                                <Link href="#">
                                    <i className="fab fa-twitter" />
                                </Link>
                                <Link href="#">
                                <i class="fab fa-linkedin"></i>
                                </Link>
                                <Link href="#">
                                    <i className="fab fa-instagram" />
                                </Link>
                                <Link href="https://wa.me/9205544540">
                                    <i className="fab fa-whatsapp" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="body-mobile d-block d-xl-none">
                        <nav className="nav-main mainmenu-nav">
                            <ul className="mainmenu metismenu" id="mobile-menu-active">
                            <li className="menu-item">
                                <Link to="/">Home</Link>
                                </li>
                                <li className="menu-item">
                                <Link to="/about-us">About Us</Link>
                                </li>
                                <li className="menu-item">
                                <Link to="/our-service">Services</Link>
                                </li>
                                <li className="menu-item">
                                   <Link to="/team">Our Team</Link>
                                </li>
                                <li className="menu-item">
                                   <Link to="/blog-grid">Blogs</Link>
                                </li>
                                <li className="menu-item">
                                   <Link to="/contactus">Contact Us</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="social-wrapper-two menu mobile-menu">
                            <Link href="#">
                                <i className="fab fa-facebook-f" />
                            </Link>
                            <Link href="#">
                                <i className="fab fa-twitter" />  
                            </Link>

                            <Link href="#">
                                <i className="fab fa-instagram" />
                            </Link>
                            {/* <Link href="https://wa.me/9205544540">
                                <i className="fab fa-whatsapp" />
                            </Link> */}
                            
                            <Link href="#">
                            <i className="fab fa-linkedin-in" />
                            </Link>
                        </div>
                        <Link
                            href="#"
                            className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btnmenu"
                        >
                            Get Quote
                        </Link>
                    </div>
                </div>
                {/* inner menu area desktop End */}
            </div>


        </div>
    )
}

export default SideMenu