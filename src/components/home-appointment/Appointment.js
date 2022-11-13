import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import HomeImg1 from '../../assets/images/appointment.png';

const Appointment = () => {
    return (
        <>
            <div className="book-appointment">
                <div className="book-appointment-img bg-property" style={{ backgroundImage: `url(${HomeImg1})` }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6 col-md-6 offset-md-6 col-sm-12">
                            <div className="book-quote-form ml-65 pt-70 pb-70">
                                <div className="section-title mb-70">
                                    <span>Book an Appoinment</span>
                                    <h2>Get a Free Quote From <br /> Our Experts</h2>
                                </div>
                                <form action="/">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <input type="text" placeholder="Name" />
                                        </div>
                                        <div className="col-xl-6">
                                            <input type="email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <input type="text" placeholder="Phone" />
                                            <textarea placeholder="Write Message Here"></textarea>
                                        </div>
                                    </div>
                                    <a href="/" className="l-btn quote-btn">Send Your Query <FaArrowRight /></a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Appointment;