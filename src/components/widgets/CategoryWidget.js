import React from 'react';
import {Link} from 'react-router-dom';

const CategoryWidget = () => {
    return (
        <>
            <div className="widget category-widget mb-60">
            <h3 className="widget-title">Categories</h3>
                <ul>
                    <li><Link to="/blogs">Garden Design</Link><span>(20)</span></li>
                    <li><Link to="/blogs">Garden Fence</Link><span>(13)</span></li>
                    <li><Link to="/blogs">Gardening</Link><span>(13)</span></li>
                    <li><Link to="/blogs">Grass Cutting</Link><span>(10)</span></li>
                    <li><Link to="/blogs">Landscaping</Link><span>(15)</span></li>
                    <li><Link to="/blogs">Rubbish Removal</Link><span>(18)</span></li>
                </ul>
            </div>
        </>
    )
}

export default CategoryWidget;