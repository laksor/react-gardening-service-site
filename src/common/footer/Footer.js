import React from 'react';
import {Link} from 'react-router-dom';
import FooterBG from '../../assets/images/footer.png';
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaAngleDoubleRight } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-top bg-property theme-bg-2 pt-110 pb-80" style={{ backgroundImage: `url(${FooterBG})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget-1">
                                    <div className="footer-title">
                                        <h4>Contact Us</h4>
                                    </div>
                                    <div className="footer-text">
                                        <p>If you have any questions or need help, feel free to contact with our team.</p>
                                    </div>
                                    <div className="footer-info">
                                        <Link to="/"><FaPhoneAlt /> (313) 666 7777</Link>
                                    </div>
                                    <div className="footer-text">
                                        <p>2555 Detroit, Michigan</p>
                                    </div>
                                    <div className="footer-info">
                                        <Link to="/"><FaPhoneAlt /> Get Directions</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12">
                                <div className="footer-widget-2">
                                    <div className="footer-title">
                                        <h4>Quick Links</h4>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/">Contact Us</Link></li>
                                            <li><Link to="/">Team</Link></li>
                                            <li><Link to="/">Our Services</Link></li>
                                            <li><Link to="/">Our Project</Link></li>
                                            <li><Link to="/">About Company</Link></li>
                                            <li><Link to="/">News Update</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12">
                                <div className="footer-widget-3">
                                    <div className="footer-title">
                                        <h4>Our Services</h4>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/">Landscaping</Link></li>
                                            <li><Link to="/">Plant Growing</Link></li>
                                            <li><Link to="/">Branch Cutting</Link></li>
                                            <li><Link to="/">Flower Scaping</Link></li>
                                            <li><Link to="/">Tree Planting</Link></li>
                                            <li><Link to="/">Rubbish Removal</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget-4">
                                    <div className="footer-title">
                                        <h4>Newsletter</h4>
                                    </div>
                                    <div className="footer-text">
                                        <p>Established since 2000. Landscaping Company in US.</p>
                                    </div>
                                    <div className="footer-social mt-35">
                                        <h5>Folllow Us:</h5>
                                        <ul>
                                            <li><Link to="/"><FaFacebookF /></Link></li>
                                            <li><Link to="/"><FaTwitter /></Link></li>
                                            <li><Link to="/"><FaInstagram /></Link></li>
                                            <li><Link to="/"><FaPinterestP /></Link></li>
                                        </ul>
                                    </div>
                                    <div className="footer-newsletter mt-40">
                                        <input type="text" placeholder="Email Address" />
                                        <button><FaAngleDoubleRight /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom bg-1 pt-40 pb-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="copyright">
                                    <p>© 2022 Champion All right reserved. Developed by <a href="https://github.com/laksor">Ahmed Laskor</a>.</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 text-xl-end text-lg-end text-md-end text-center">
                                <div className="footer-menu">
                                    <ul>
                                        <li><Link to="/">About Champion</Link></li>
                                        <li><Link to="/">Careers</Link></li>
                                        <li><Link to="/">Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;