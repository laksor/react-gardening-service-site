import React from 'react';
import HeaderTop from '../common/header/HeaderTop';
import HeaderBottomOne from '../common/header/HeaderBottomOne';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import breadcrumbBg from '../assets/images/breadcrumb/1.jpg';
import Projects from '../components/projects/Projects';
import Cta from '../components/cta/Cta';
import WhyChoseUs from '../components/why-chose-us/WhyChoseUs';
import Subscribe from '../components/subscribe/Subscribe';
import Footer from '../common/footer/Footer';

const Project = () => {
    return (
        <>
            <HeaderTop />
            <HeaderBottomOne />
            <Breadcrumb 
                breadcrumbBg={breadcrumbBg}
                heading="Projects"
                description="We are available for 24/7 for Garden & Landscaping Services"
                currentPage="Projects" 
            />
            <Projects />
            <Cta />
           <WhyChoseUs />
            <Subscribe />
            <Footer />
           
        </>
    )
}

export default Project;