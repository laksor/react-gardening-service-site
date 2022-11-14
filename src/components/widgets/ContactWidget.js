import React from 'react';
import {Link} from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';

const ContactWidget = () => {
    return (
        <>
            <div className="widget contact-widget mb-60">
                <span>Gardening Excellence!</span>
                <h3 className="widget-title">Expanded Gardening Services Fits All needs</h3>
                <p>The processes and systems we put in place provide high quality service with a focus on safety.</p>
                <Link to="/" className="l-contact-btn"><span><FaPhoneAlt /></span> Dail To Call</Link>
                <h3><Link to="/">313 555 999</Link></h3>
            </div>
        </>
    )
}

export default ContactWidget;