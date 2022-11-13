import React from 'react';
import SubscribeBg from '../../assets/images/subscribe.jpg';

const Subscribe = () => {
    return (
        <>
            <div className="newsletter-area pt-110 pb-110 bg-property" data-overlay="black" data-opacity="7" style={{ backgroundImage: `url(${SubscribeBg})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="newsletter-content-wrapper text-center">
                                <h2>Get News Updates Special Event Notices And <br /> More When You Join Our Email List</h2>
                                <form action="#">
                                    <input type="text" placeholder="Enter Your Email" />
                                    <button className="l-btn pl-60 pr-60 fw-light">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscribe;