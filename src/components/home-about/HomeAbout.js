import React from 'react';
import HomeAboutImg from '../../assets/images/about/about.jpg';

const HomeAbout = () => {
    return (
        <>
            <div className="about-area gray-bg-2 pt-200 pb-160">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="about-img-style-1">
                                <img src={HomeAboutImg} alt="" />
                                <div className="about-award">
                                    <h3>We Are Since 2000! Over 200 Awards</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="about-text-wrapper pt-30">
                                <div className="section-title mb-40">
                                    <span>We are Committed to Landscape Service</span>
                                    <h2 className="mb-30">20 years we resarch or how to growth Garden & Landscap Systems</h2>
                                    <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                                        <br /><br /> Combined with a handful of model sentence structures, Lorem Ipsum The generated Lorem Ipsum is therefore always free from repetition, injected humour, </p>
                                </div>
                                <a href="/contact" className="l-btn">Appointment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeAbout;