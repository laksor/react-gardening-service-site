import React from 'react';
import {Link} from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const BlogPostNavigation = () => {
    return (
        <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-xm-12">
                <Link to="/" className="post-prev-btn"><FaArrowLeft /> Previous Post</Link>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-xm-12 text-end text-sm-left">
                <Link to="/" className="post-next-btn">Previous Post <FaArrowRight /></Link>
            </div>
        </div>
    )
}

export default BlogPostNavigation;