import React from 'react';

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import HeaderOne from "../components/header/HeaderOne";
// import FooterFour from "../components/footer/FooterFour";
import Breadcrumb from "./Breadcrumb";
import post from '../data/post.json';




function BlogGrid() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Blog Details' }
    ];
    const { id } = useParams();
    const blogPost = post.find(post => post.id === parseInt(id));

    if (!blogPost) {
        return <div>Post not found!</div>
    }
    // // test start
    const currentUrl = encodeURIComponent(window.location.href);
    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
        twitter: `https://twitter.com/intent/tweet?url=${currentUrl}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`,
        whatsapp: `https://api.whatsapp.com/send?text=${currentUrl}`,
    };
    // //   test end
    return (
        <div className=''>

            <HeaderOne />

            <Breadcrumb title="Blogs" breadcrumbs={breadcrumbs} />

            {/* rts blog mlist area */}
            <div className="rts-blog-list-area rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        {/* rts blo post area */}
                        <div className="col-xl-8 col-md-12 col-sm-12 col-12">
                            {/* single post */}
                            <div className="blog-single-post-listing details mb--0">
                                <div className="thumbnail">
                                    <img src={`/assets/images/blog/${blogPost.bannerImg}`}
                                        alt={blogPost.title} />
                                </div>
                                <div className="blog-listing-content">
                                    <div className="user-info">
                                        {/* single info */}
                                        <div className="single">
                                            <i className="far fa-user-circle" />
                                            <span>By LDR GROUPS</span>
                                        </div>
                                        {/* single infoe end */}
                                        
                                        {/* single info */}
                                        <div className="single">
                                            <i className="far fa-tags" />
                                            <span>Date {blogPost.publishedDate}</span>
                                        </div>
                                        {/* single infoe end */}
                                    </div>
                                    <h3 className="title">{blogPost.title}</h3>
                                    <p className="disc para-1" dangerouslySetInnerHTML={{ __html: blogPost.descripTion }}></p>
                                    {/* quote area start */}
                                    {/* quote area end */}
                                    
                                    <p className="disc mt--30">
                                      <b> Subscribe to Newsletter for more updates </b>
                                    </p>
                                    <div className="row  align-items-center">
                                        <div className="col-lg-6 col-md-12">
                                            {/* tags details */}
                                            <div className="details-tag">
                                                <h6>Tags:</h6>
                                                <button>Services</button>
                                                <button>Business</button>
                                                <button>Growth</button>
                                            </div>
                                            {/* tags details End */}
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="details-share">
                                                <h6>Share:</h6>
                                                <button onClick={() => window.open(shareLinks.facebook, "https://ldrgroups.com/blog/")}>
                                                    <i className="fab fa-facebook-f" />
                                                </button>
                                                <button onClick={() => window.open(shareLinks.twitter, "_blank")}>
                                                    <i className="fab fa-twitter" />
                                                </button>
                                                <button onClick={() => window.open(shareLinks.linkedin, "_blank")}>
                                                    <i className="fab fa-linkedin-in" />
                                                </button>
                                                <button onClick={() => window.open(shareLinks.whatsapp, "_blank")}>
                                                    <i className="fab fa-whatsapp" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="replay-area-details">
                                        <h4 className="title">Leave a Reply</h4>
                                        <form action="#">
                                            <div className="row g-4">
                                                <div className="col-lg-6">
                                                    <input type="text" placeholder="Your Name" />
                                                </div>
                                                <div className="col-lg-6">
                                                    <input type="text" placeholder="Your Name" />
                                                </div>
                                                <div className="col-12">
                                                    <input type="text" placeholder="Select Topic" />
                                                    <textarea defaultValue={""} />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <Link className="rts-btn btn-primary" to={'#'}>
                                        Submit Message
                                    </Link>
                                </div>
                            </div>
                            {/* single post End*/}
                        </div>
                        {/* rts-blog post end area */}
                        {/*rts blog wizered area */}
                        <div className="col-xl-4 col-md-12 col-sm-12 col-12">

                            
                            {/* single wizered start */}
                            <div className="rts-single-wized Recent-post">
                                <div className="wized-header">
                                    <h5 className="title">Recent Posts</h5>
                                </div>
                                <div className="wized-body">
                                    {/* recent-post */}
                                    <div className="recent-post-single">
                                        <div className="thumbnail">
                                            <Link to={'#'}>
                                                <img
                                                    src="/assets/images/blog/details/recent-post/01.png"
                                                    alt="Blog_post"
                                                />
                                            </Link>
                                        </div>
                                        <div className="content-area">
                                            <div className="user">
                                                <i className="fal fa-clock" />
                                                <span>15 Feb, 2025</span>
                                            </div>
                                            <Link className="post-title" to={'#'}>
                                                <h6 className="title">
                                                    We would love to share a similar experience
                                                </h6>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* recent-post End */}
                                    {/* recent-post */}
                                    <div className="recent-post-single">
                                        <div className="thumbnail">
                                            <Link to={'#'}>
                                                <img
                                                    src="/assets/images/blog/details/recent-post/02.png"
                                                    alt="Blog_post"
                                                />
                                            </Link>
                                        </div>
                                        <div className="content-area">
                                            <div className="user">
                                                <i className="fal fa-clock" />
                                                <span>15 Feb, 2025</span>
                                            </div>
                                            <Link className="post-title" to={'#'}>
                                                <h6 className="title">
                                                    We would love to share a similar experience
                                                </h6>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* recent-post End */}
                                    {/* recent-post */}
                                    <div className="recent-post-single">
                                        <div className="thumbnail">
                                            <Link to={'#'}>
                                                <img
                                                    src="/assets/images/blog/details/recent-post/03.png"
                                                    alt="Blog_post"
                                                />
                                            </Link>
                                        </div>
                                        <div className="content-area">
                                            <div className="user">
                                                <i className="fal fa-clock" />
                                                <span>15 Feb, 2025</span>
                                            </div>
                                            <Link className="post-title" to={'#'}>
                                                <h6 className="title">
                                                    We would love to share a similar experience
                                                </h6>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* recent-post End */}
                                    {/* recent-post */}
                                    <div className="recent-post-single">
                                        <div className="thumbnail">
                                            <Link to={'#'}>
                                                <img
                                                    src="/assets/images/blog/details/recent-post/04.png"
                                                    alt="Blog_post"
                                                />
                                            </Link>
                                        </div>
                                        <div className="content-area">
                                            <div className="user">
                                                <i className="fal fa-clock" />
                                                <span>15 Feb, 2025</span>
                                            </div>
                                            <Link className="post-title" to={'#'}>
                                                <h6 className="title">
                                                    We would love to share a similar experience
                                                </h6>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* recent-post End */}
                                </div>
                            </div>
                            {/* single wizered End */}
                            {/* single wizered start */}
                            <div className="rts-single-wized">
                                <div className="wized-header">
                                    <h5 className="title">Popular Tags</h5>
                                </div>
                                <div className="wized-body">
                                    <div className="tags-wrapper">
                                        <Link to={'#'}>Services</Link>
                                        <Link to={'#'}>Business</Link>
                                        <Link to={'#'}>Growth</Link>
                                        <Link to={'#'}>Finance</Link>
                                        <Link to={'#'}>Investment</Link>
                                    </div>
                                </div>
                            </div>
                            {/* single wizered End */}
                            {/* single wizered start */}
                            <div className="rts-single-wized contact">
                                <div className="wized-header">
                                    <Link to={'#'}>
                                        <img src="../assets/images/logo/logo.svg" alt="Business_logo" />
                                    </Link>
                                </div>
                                <div className="wized-body">
                                    <h5 className="title">Need Help? We Are Here To Help You</h5>
                                    <Link className="rts-btn btn-primary" to="/contactus">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                            {/* single wizered End */}
                        </div>
                        {/* rts- blog wizered end area */}
                    </div>
                </div>
          
            </div>
            {/* rts blog mlist area End */}


          {/* rts footer three area start */}
          <div className="rts-footer-area footer-three footer-four rts-section-gapTop footer-bg-2" id='f-contact'>
                <div className="container pb--100 pb_sm--40">
                    <div className="row g-5">
                        <div className="col-xl-3 col-lg-6">
                            <div className="footer-three-single-wized left">
                                <a href="index" className="logo_footer">
                                    <img src="../assets/images/logo/logo.svg" alt="Logo-image" />
                                </a>
                                <p className="disc">
                                LDR Groups is a professional audit, tax, and compliance advisory firm supporting businesses with accurate, transparent, and reliable financial solutions.
                                </p>
                                <ul className="social-three-wrapper">
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i class="fad fa-times"></i>
                                        </a>
                                        </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://wa.me/9205544540">
                                            <i className="fab fa-whatsapp" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* footer three mid area */}
                        <div className="col-xl-6 col-lg-6">
                            <div className="row">
                                {/* footer mid area left */}
                                <div className="col-lg-6">
                                    <div className="footer-three-single-wized mid-left">
                                        <h5 className="title">Office Information</h5>
                                        <div className="body">
                                            <div className="info-wrapper">
                                                <div className="single">
                                                    <ul className="icon">
                                                        <li>
                                                            <i className="fas fa-phone-alt" />
                                                        </li>
                                                    </ul>
                                                    <div className="info">
                                                        <span>Call Us 24/7</span>
                                                        <a href="#">+91 92055 44540</a>
                                                    </div>
                                                </div>
                                                <div className="single">
                                                    <ul className="icon">
                                                        <li>
                                                            <i className="far fa-envelope" />
                                                        </li>
                                                    </ul>
                                                    <div className="info">
                                                        <span>Work with us</span>
                                                        <a href="mailto:Office@ldrgroups.com">Office@ldrgroups.com</a>
                                                    </div>
                                                </div>
                                                <div className="single">
                                                    <ul className="icon">
                                                        <li>
                                                            <i className="fas fa-map-marker-alt" />
                                                        </li>
                                                    </ul>
                                                    <div className="info">
                                                        <span>Our Location</span>
                                                        <a href="#">
                                                           7th Floor, Office No. 74D,  <br/>Himalaya House KG Marg Area, ND - 110001
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* footer mid area left end */}
                                {/* footer mid area right */}
                                <div className="col-lg-6">
                                    <div className="footer-three-single-wized mid-right">
                                        <h5 className="title">Get Updates</h5>
                                        <div className="body">
                                            <div className="update-wrapper">
                                                <p className="disc">
                                                    Sign up for our latest news &amp; articles. We won’t give
                                                    you spam mails.
                                                </p>
                                                <form className="email-footer-area">
                                                    <input
                                                        type="email"
                                                        placeholder="Enter Email Address"
                                                        required=""
                                                    />
                                                    <button type="submit">
                                                        <i className="fas fa-location-arrow" />
                                                    </button>
                                                </form>
                                                <div className="note-area">
                                                    <p>
                                                        <span>Note:</span> We do not publish your email
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* footer mid area right end */}
                            </div>
                        </div>
                        {/* footer three mid area ENd */}
                        <div className="col-xl-3 col-lg-6">
                            <div className="footer-three-single-wized right">
                                <h5 className="title">Instagram Posts</h5>
                                <div className="body">
                                    <div className="footer-gallery-inner">
                                        <a href="#">
                                            <img
                                                src="../assets/images/footer/three-gallery/01.png"
                                                alt="Footer-gallery"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="../assets/images/footer/three-gallery/02.png"
                                                alt="Footer-gallery"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="../assets/images/footer/three-gallery/03.png"
                                                alt="Footer-gallery"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="../../../assets/images/footer/three-gallery/04.png"
                                                alt="Footer-gallery"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="../assets/images/footer/three-gallery/05.png"
                                                alt="Footer-gallery"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="../assets/images/footer/three-gallery/06.png"
                                                alt="Footer-gallery"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <p className="disc text-center ptb--25">
                                    LDR Groups - Copyright 2025. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts footer three area end */}


        </div>
        
    )
}

export default BlogGrid