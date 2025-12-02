import React from 'react'
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <div>
            <nav className="nav-main mainmenu-nav d-none d-xl-block">
                <ul className="mainmenu">
                    <li><Link className="nav-item" to={'/home-one'}>
                        Home
                    </Link>
                    </li>
                    <li >
                        <Link className="nav-item" to={'/about-us'}>
                            About Us
                        </Link>
                    </li>

                    <li className="has-droupdown">
                        <Link className="nav-link" to={'/our-service'}>
                            Services
                        </Link>
                        <ul className="submenu menu-link four-columns">
                            <div className="column">
                                {/* Column 1: Audit & Litigation */}
                                <li className="menu-item">
                                    <Link className="tag" to={'#'}>Audit & Assurance</Link>
                                  <ul>
                <li><Link to={'#'}>Statutory Audit</Link></li>
                <li><Link to={'#'}>Internal Audit</Link></li>
                <li><Link to={'#'}>Forensic Audit</Link></li>
                <li><Link to={'#'}>Due Diligence</Link></li>
                <li><Link to={'#'}>Risk Assessment</Link></li>
            </ul>
                                </li>
                                <li className="menu-item">
                                    <Link className="tag" to={'#'}>Litigation Services</Link>
                                    <ul>
                <li><Link to={'#'}>Income Tax Litigation</Link></li>
                <li><Link to={'#'}>Corporate Law Disputes</Link></li>
                <li><Link to={'#'}>Transfer Pricing Dispute Resolution</Link></li>
                <li><Link to={'#'}>Cross-Border Tax Disputes</Link></li>
                <li><Link to={'#'}>Representation Before Tax Authorities</Link></li>
            </ul>
                                </li>
                            </div>

                            <div className="column">
                                {/* Column 2: International Tax & Transfer Pricing */}
                                <li className="menu-item">
                                    <Link className="tag" to={'#'}>International Taxation</Link>
                                         <ul>
                <li><Link to={'#'}>Transfer Pricing</Link></li>
                <li><Link to={'#'}>DTAA Advisory</Link></li>
                <li><Link to={'#'}>Cross-Border Taxation</Link></li>
                <li><Link to={'#'}>Expat Taxation</Link></li>
                <li><Link to={'#'}>Foreign Investment Compliance</Link></li>
            </ul>
                                </li>
                                <li className="menu-item">
                                    <Link className="tag" to={'#'}>Transfer Pricing</Link>
                                     <ul>
                <li><Link to={'#'}>Arm&apos;s Length Pricing</Link></li>
                <li><Link to={'#'}>Documentation Compliance</Link></li>
                <li><Link to={'#'}>Benchmarking Analysis</Link></li>
                <li><Link to={'#'}>Dispute Resolution</Link></li>
                <li><Link to={'#'}>Safe Harbor Rules</Link></li>
            </ul>
                                </li>
                            </div>

                            <div className="column">
                                {/* Column 3: Compliance Services */}
                                <li className="menu-item">
                                    <Link className="tag" to={'#'}>Company & LLP Compliance</Link>
                                   <ul>
                <li><Link to={'#'}>Company Formation</Link></li>
                <li><Link to={'#'}>LLP Registration</Link></li>
                <li><Link to={'#'}>ROC Compliances</Link></li>
                <li><Link to={'#'}>Business Restructuring</Link></li>
                <li><Link to={'#'}>Corporate Governance</Link></li>
            </ul>
                                </li>
                                <li className="menu-item">
                                    <Link className="tag" to={'#'}>NRI Services</Link>
                                    <ul>
                <li><Link to={'#'}>NRI Tax Filing</Link></li>
                <li><Link to={'#'}>Foreign Remittance Compliance</Link></li>
                <li><Link to={'#'}>Property Taxation for NRIs</Link></li>
                <li><Link to={'#'}>DTAA Relief for NRIs</Link></li>
                <li><Link to={'#'}>Repatriation & 15CA/15CB Support</Link></li>
            </ul>
                                </li>
                            </div>

                            <div className="column">
                                {/* Column 4: Accounting, Payroll, Trademark & Copyright */}
                                <li className="menu-item">
                                    <Link className="tag" to={'#'}>Accounting & Payroll</Link>
                                 <ul>
                <li><Link to={'#'}>Bookkeeping Services</Link></li>
                <li><Link to={'#'}>Payroll Processing</Link></li>
                <li><Link to={'#'}>Financial Reporting</Link></li>
                <li><Link to={'#'}>Tax-Ready Accounting</Link></li>
                <li><Link to={'#'}>Virtual CFO Services</Link></li>
            </ul>
                                </li>
                                <li className="menu-item">
                                    <Link className="tag" to={'#'}>Income Tax & GST</Link>
                                    <ul>
                <li><Link to={'#'}>Personal Tax Filing</Link></li>
                <li><Link to={'#'}>Corporate Tax Filing</Link></li>
                <li><Link to={'#'}>TDS/TCS Compliance</Link></li>
                <li><Link to={'#'}>Advance Tax & Quarterly Filings</Link></li>
                <li><Link to={'#'}>GST Compliance & Returns</Link></li>
            </ul>
                                </li>
                            </div>
                        </ul>
                    </li>

                    <li >
                        <Link className="nav-item" to={'/blog-grid'}>
                            Blog
                        </Link>

                    </li>
                    {/* <li >
                        <Link className="nav-item" to={'/pricing-plane'}>
                            Pricing Plane
                        </Link>
                    </li> */}
                    <li>
                        <Link className="nav-item" to={'/contactus'}>
                            Contact
                        </Link>
                    </li>

                </ul>
            </nav>
        </div >
    )
}

export default Nav