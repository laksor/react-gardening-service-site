import React from 'react';
import {Link} from 'react-router-dom';

const ErrorContent = () => {
    return (
        <>
            <div className="error-area pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="error-404-wrapper text-center">
                                <h2>404</h2>
                                <h3>Page Not Found</h3>
                                <p>The page you are looking for might have been removed had its <br /> name changed or is temporarily unavailable</p>
                                <Link to="/" className="l-btn">Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorContent;