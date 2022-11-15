import React from 'react';
import HeaderTop from '../common/header/HeaderTop';
import HeaderBottomOne from '../common/header/HeaderBottomOne';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import breadcrumbBg from '../assets/images/breadcrumb/1.jpg';
import Service from '../components/sevices/Service';
import Cta from '../components/cta/Cta';

import Subscribe from '../components/subscribe/Subscribe';
import Footer from '../common/footer/Footer';
import WhyChoseUs from '../components/why-chose-us/WhyChoseUs';
import HomeAbout from '../components/home-about/HomeAbout';


const Services = () => {
    return (
        <>
            <HeaderTop />
            <HeaderBottomOne />
            <Breadcrumb 
            breadcrumbBg={breadcrumbBg} 
            heading="Services" 
            description="We are available for 24/7 for Garden & Landscaping Services" 
            currentPage="Services" />
            <Service />
            <Cta />
            <WhyChoseUs />
            <HomeAbout />
            <Subscribe />
            <Footer />
        </>
    )
}

export default Services;