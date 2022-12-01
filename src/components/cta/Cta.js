import React from 'react';
import {Link} from 'react-router-dom';

const Cta = () => {
    return (
        <>
            <div className="cta-area bg-1 pt-60 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="cta-wrapper text-center">
                                <h2>Get a Professional Services, <span>Call us Now. <Link to="/">313 789 654</Link></span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cta;