import React from 'react';
import HeaderTop from '../common/header/HeaderTop';
import HeaderBottomOne from '../common/header/HeaderBottomOne';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import breadcrumbBg from '../assets/images/breadcrumb/1.jpg';
import ContactForm from '../components/contact/ContactForm';
import ContactMap from '../components/contact/ContactMap';
import Subscribe from '../components/subscribe/Subscribe';
import Footer from '../common/footer/Footer';
import Cta from '../components/cta/Cta';

const Contact = () => {
    return (
        <>
            <HeaderTop />
            <HeaderBottomOne />
            <Breadcrumb 
                breadcrumbBg={breadcrumbBg}
                heading="Contact Us"
                description="We are available for 24/7 for Garden & Landscaping Services"
                currentPage="Contact Us" 
            />
            <ContactForm />
            <Cta />
            <ContactMap />
            <Subscribe />
            <Footer />
        </>
    )
}

export default Contact;