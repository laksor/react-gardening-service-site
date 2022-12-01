import React from 'react';
import { FaPhoneAlt, FaClock } from 'react-icons/fa';

const HeaderTop = () => {
    return (
        <div className="header-top pt-15 pb-15 bg-1">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                        <div className="header-info">
                            <ul>
                                <li>
                                    <FaPhoneAlt /> Call on :
                                    <a href="/"> (313) 666 777</a>
                                </li>
                                <li>
                                    <FaClock /> Open Hours : Mon-Fri 08:00 - 18:00
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div className="header-social text-center text-xl-end text-lg-end">
                            <a href="facebook.com">Facebook</a>
                            <a href="facebook.com">Twitter</a>
                            <a href="instagram.com">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop;