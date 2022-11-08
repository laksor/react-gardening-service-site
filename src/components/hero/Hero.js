import React from 'react';
import {Link} from 'react-router-dom';
//import ModalVideo from 'react-modal-video';
//import { FaPlay } from "react-icons/fa";
import HeroImg1 from '../../assets/images/hero1.jpg';
import HeroImg2 from '../../assets/images/hero/1.jpg';

const Hero = () => {
    
    return (
        <>
            
            <div className="hero-area height-800 bg-property d-flex align-items-center" data-overlay="black" data-opacity="7" style={{ backgroundImage: `url(${HeroImg1})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="hero-wrapper">
                                <h1>Welcome to Our Perfect Solution Landscape & gardening.</h1>
                                <p>We are certified company. We provide best Landscaping & Gardening services for you your company .</p>
                                <Link to="/" className="l-btn">Our Solution</Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="hero-popup-content">
                                <img src={HeroImg2} alt="" />
                                <div className="hero-popup-video">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;