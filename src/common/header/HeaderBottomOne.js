import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../components/logo/Logo';
import Nav from './Nav';
import MobileMenu from './MobileMenu';

const HeaderBottomOne = () => {
    return (
        <>
            <div className="header-bottom sticky-top">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-xl-2 col-lg-2 col-md-4">
                            <Logo />
                        </div>
                        <div className="col-xl-10 col-lg-10 col-md-8">
                            <div className="header-btn f-right">
                                <Link to="/contact" className="l-btn">Get a Quote</Link>
                            </div>
                            <Nav />
                        </div>
                        <div className="col-12">
                            <div className="mobile-menu">
                                <MobileMenu />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderBottomOne;