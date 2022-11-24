import React from 'react';
import HeaderTop from '../common/header/HeaderTop';
import HeaderBottomOne from '../common/header/HeaderBottomOne';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import breadcrumbBg from '../assets/images/breadcrumb/1.jpg';
import ServiceDetailsContent from '../components/service-details/ServiceDetailsContent';
import ServiceHowItWork from '../components/service-details/ServiceHowItWork';
import ServiceFaq from '../components/service-details/ServiceFaq';
import QuoteWidget from '../components/widgets/QuoteWidget';
import ContactWidget from '../components/widgets/ContactWidget';
import Footer from '../common/footer/Footer';

const ServiceDetails = () => {
    return (
        <>
            <HeaderTop />
            <HeaderBottomOne />
            <Breadcrumb 
                breadcrumbBg={breadcrumbBg}
                heading="Services Details"
                description="We are available for 24/7 for Garden & Landscaping Services"
                currentPage="Services Details" 
            />
            <div className="service-details pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 pr-50">
                            <ContactWidget />
                            <QuoteWidget />
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="service-details-wrapper">
                                <ServiceDetailsContent />
                                <ServiceHowItWork />
                                <ServiceFaq />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ServiceDetails;