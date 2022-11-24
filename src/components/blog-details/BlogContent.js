import React from 'react';
import {Link} from 'react-router-dom';
import { FaQuoteLeft, FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import BlogContentImg1 from '../../assets/images/blog/bl-1.jpg';
import BlogContentImg2 from '../../assets/images/blog/bl-4.jpg';

const BlogContent = () => {
    return (
        <div className="row">
            <div className="col-xl-12">
                <div className="blog-details pb-60 mb-60 border-bottom-1">
                    <img className="img-fluid mb-30" src={BlogContentImg1} alt="" />
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled by charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that bound to ensue;
                        and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.
                        <br /><br /> These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain
                        avoided. But in certain circumstances and owing to the claims</p>
                    <h2>Our Best Garden & Landscape Services</h2>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled by charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that bound to ensue;
                        and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
                    <div className="quote-block text-center">
                        <div className="quote-icon">
                            <FaQuoteLeft />
                        </div>
                        <p>Combined with a handful of model sentence structures, generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words
                            etc.
                        </p>
                    </div>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis et expedita distinctio. Nam libero tempore, cum soluta nobis possimus,</p>
                    <img className="img-fluid mt-20 mb-30" src={BlogContentImg2} alt="" />
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis et expedita distinctio. Nam libero tempore, cum soluta nobis possimus,</p>
                    <div className="row mt-50">
                        <div className="col-xl-10 col-lg-8 col-md-7 col-sm-12">
                            <div className="post-tags">
                                <h5>Post Tags:</h5>
                                <ul>
                                    <li><Link to="/">Gardening</Link></li>
                                    <li><Link to="/">Tree</Link></li>
                                    <li><Link to="/">Landscape</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-5 col-sm-12 text-end">
                            <div className="post-share">
                                <h5>Share:</h5>
                                <ul>
                                    <li><Link to="/"><FaFacebookF /></Link></li>
                                    <li><Link to="/"><FaTwitter /></Link></li>
                                    <li><Link to="/"><FaPinterestP /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogContent;