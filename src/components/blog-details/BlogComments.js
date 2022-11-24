import React from 'react';
import {Link} from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import BlogCommentAvatar1 from '../../assets/images/blog/c-1.png';
import BlogCommentAvatar2 from '../../assets/images/blog/c-2.png';

const BlogComments = () => {
    return (
        <>
            <div className="comments-area pt-100 pb-100">
                <h2>3 Comments</h2>
                <ul>
                    <li className="comment">
                        <div className="comment-body">
                            <div className="comment-avatar">
                                <img src={BlogCommentAvatar1} className="img-fluid" alt="" />
                            </div>
                            <div className="comment-content">
                                <h5><Link to="/">Robart Sony</Link></h5>
                                <div className="comment-metadata">
                                    <span className="says">Says:</span>
                                    <Link to="/">
                                        <time dateTime="2018-09-02T12:17:07+00:00">
                                            Jul 21, 2021 at 10:00am
                                        </time>
                                    </Link>
                                </div>
                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment,</p>
                                <div className="comment-reply">
                                    <Link to="/" rel="nofollow">Reply</Link>
                                </div>
                            </div>
                        </div>
                        <ul className="children">
                            <li className="comment">
                                <div className="comment-body">
                                    <div className="comment-avatar">
                                        <img src={BlogCommentAvatar2} className="img-fluid" alt="" />
                                    </div>
                                    <div className="comment-content">
                                        <h5><Link to="/">Robart Sony</Link></h5>
                                        <div className="comment-metadata">
                                            <span className="says">Says:</span>
                                            <Link to="/">
                                                <time datetime="2018-09-02T12:17:07+00:00">
                                                    Jul 21, 2021 at 10:00am
                                                </time>
                                            </Link>
                                        </div>
                                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment,</p>
                                        <div className="comment-reply">
                                            <Link to="/" rel="nofollow">Reply</Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="comment">
                        <div className="comment-body">
                            <div className="comment-avatar">
                                <img src={BlogCommentAvatar1} className="img-fluid" alt="" />
                            </div>
                            <div className="comment-content">
                                <h5><Link to="/">Robart Sony</Link></h5>
                                <div className="comment-metadata">
                                    <span className="says">Says:</span>
                                    <Link to="/">
                                        <time datetime="2018-09-02T12:17:07+00:00">
                                            Jul 21, 2021 at 10:00am
                                        </time>
                                    </Link>
                                </div>
                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment,</p>
                                <div className="comment-reply">
                                    <Link to="/" rel="nofollow">Reply</Link>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="comments-form">
                <h2>Leave A Reply</h2>
                <form action="#">
                    <div className="row">
                        <div className="col-xl-6">
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="col-xl-6">
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="col-12">
                            <input type="url" placeholder="Website" />
                            <textarea placeholder="Write Your Comments..."></textarea>
                            <button className="l-btn">Post Comment <FaArrowRight /></button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default BlogComments;