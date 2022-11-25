import React from 'react';
import HeaderTop from '../common/header/HeaderTop';
import HeaderBottomOne from '../common/header/HeaderBottomOne';
import Footer from '../common/footer/Footer';
import BlogContent from '../components/blog-details/BlogContent';
import BlogPostNavigation from '../components/blog-details/BlogPostNavigation';
import BlogAuthor from '../components/blog-details/BlogAuthor';
import BlogComments from '../components/blog-details/BlogComments';
import CategoryWidget from '../components/widgets/CategoryWidget';
import ContactWidget from '../components/widgets/ContactWidget';
import QuoteWidget from '../components/widgets/QuoteWidget';
import BlogBreadcrumb from '../components/blog-details/BlogBreadcrumb';
import BlogBreadcrumbBg from '../assets/images/breadcrumb/1.jpg';

const BlogDetails = () => {
    return (
        <>

            <HeaderTop />
            <HeaderBottomOne />
            <BlogBreadcrumb 
                BlogBreadcrumbBg={BlogBreadcrumbBg}
                heading="Complete Solution For Your Land And Garden Design."
                date="25 October 2021"
                author="Andrew"
            />
            <div className="blog-details-area pt-80 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 pr-50">
                            <BlogContent />
                            <BlogPostNavigation />
                            <BlogAuthor />
                            <BlogComments />
                        </div>
                        <div className="col-xl-4 col-lg-4 pr-50">
                            <CategoryWidget />
                            <ContactWidget />
                            <QuoteWidget />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BlogDetails;