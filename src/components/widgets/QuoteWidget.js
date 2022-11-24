import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const QuoteWidget = () => {
    return (
        <>
            <div className="widget quote-widget">
                <h3 className="widget-title">Leave a Message</h3>
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Email" />
                <textarea placeholder="Massage Details"></textarea>
                <button>SEND MASSAGE <FaArrowRight /></button>
            </div>
        </>
    )
}

export default QuoteWidget;