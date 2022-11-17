import React from 'react'
import HeaderTop from '../common/header/HeaderTop';
import HeaderBottomOne from '../common/header/HeaderBottomOne';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import breadcrumbBg from '../assets/images/breadcrumb/1.jpg';
import Blog from '../components/page-blog/Blog';
import Subscribe from '../components/subscribe/Subscribe';
import Footer from '../common/footer/Footer';

const Blogs = () => {
    return (
        <>
            <HeaderTop />
            <HeaderBottomOne />
            <Breadcrumb 
                breadcrumbBg={breadcrumbBg}
                heading="Our Blog"
                description="We are available for 24/7 for Garden & Landscaping Services"
                currentPage="Blog"
            />
            <Blog />
            <Subscribe />
            <Footer />
        </>
    )
}

export default Blogs;