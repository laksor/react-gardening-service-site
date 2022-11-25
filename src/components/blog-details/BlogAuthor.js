import React from 'react';
import {Link} from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import BlogAuthorAvatar from '../../assets/images/blog/author-avatar.jpg';

const BlogAuthor = () => {
    return (
        <div className="row mt-95">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                <div className="post-author-avatar pl-30">
                    <img className="img-fluid" src={BlogAuthorAvatar} alt="" />
                </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12">
                <div className="post-author-bio">
                    <h5><Link to="/">Andrew</Link></h5>
                    <p>Et harum quidem rerum facilis est et expedita distinctio. Nam tempore, soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, </p>
                    <Link to="/"><FaFacebookF /></Link>
                    <Link to="/"><FaTwitter /></Link>
                    <Link to="/"><FaPinterestP /></Link>
                </div>
            </div>
        </div>
    )
}

export default BlogAuthor;