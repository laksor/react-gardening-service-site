import React from 'react';
import HeaderTop from '../common/header/HeaderTop';
import HeaderBottomOne from '../common/header/HeaderBottomOne';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import breadcrumbBg from '../assets/images/breadcrumb/1.jpg';
import ContactWidget from '../components/widgets/ContactWidget';
import QuoteWidget from '../components/widgets/QuoteWidget';
import ProjectContent from '../components/project-details/ProjectContent';
import Footer from '../common/footer/Footer';

const ProjectDetails = () => {
    return (
        <>
            <HeaderTop />
            <HeaderBottomOne />
            <Breadcrumb breadcrumbBg={breadcrumbBg} heading="Project Details" description="We are available for 24/7 for Garden & Landscaping Services" currentPage="Project Details" />
            <div className="project-details pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 pr-50 mb-60">
                            <ContactWidget />
                            <QuoteWidget />
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <ProjectContent />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProjectDetails;