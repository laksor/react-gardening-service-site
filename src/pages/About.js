import React from 'react';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import breadcrumbBg from '../assets/images/breadcrumb/1.jpg';
import HeaderBottomOne from '../common/header/HeaderBottomOne';
import HeaderTop from '../common/header/HeaderTop';
import Subscribe from '../components/subscribe/Subscribe';
import Footer from '../common/footer/Footer';
import FunFact from '../components/fun-fact/FunFact';
import AboutExperience from '../components/home-about/AboutExperience';
import AboutTeam from '../components/home-about/AboutTeam';
import Cta from '../components/cta/Cta';
import HowItWork from '../components/how-it-work/HowItWork';

const About = () => {
    return (
        <>
            <HeaderTop />
            <HeaderBottomOne />
            <Breadcrumb 
                breadcrumbBg={breadcrumbBg}
                heading="Our Company"
                description="We are available for 24/7 for Garden & Landscaping Services"
                currentPage="About Us"
            />
            <AboutExperience />
            <FunFact />
            <AboutTeam />
            <Cta />
            <HowItWork />
            <Subscribe />
            <Footer />
        </>
    )
}

export default About;

