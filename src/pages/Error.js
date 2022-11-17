import React from 'react';
import HeaderTop from '../common/header/HeaderTop';
import HeaderBottomOne from '../common/header/HeaderBottomOne';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import breadcrumbBg from '../assets/images/breadcrumb/1.jpg';
import ErrorContent from '../components/error/ErrorContent';
import Footer from '../common/footer/Footer';

const Error = () => {
    return (
            <>
                <HeaderTop />
                <HeaderBottomOne />
                <Breadcrumb breadcrumbBg={breadcrumbBg} heading="404" description="Opps! You have some problems" currentPage="404" />
                <ErrorContent />
                <Footer />
            </>
    )
}

export default Error;