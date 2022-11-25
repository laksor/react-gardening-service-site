import React from 'react';
import {Link} from 'react-router-dom';

const BlogBreadcrumb = ({ BlogBreadcrumbBg, heading, date, author }) => {
    return (
        <>
            <div className="breadcrumb-area pt-60 pb-60 bg-property" data-overlay="black" data-opacity="7" style={{ backgroundImage: `url(${BlogBreadcrumbBg})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 justify-content-center">
                            <div className="breadcrumb-content-wrapper text-center">
                                <h2>{heading}</h2>
                                <ul className="post-meta">
                                    <li><Link to="/">{date}</Link></li>
                                    <li><span>By</span> <Link to="/">{author}</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogBreadcrumb;