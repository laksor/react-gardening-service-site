import React from 'react';
import {Link} from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

const Pagination = () => {
    return (
        <>
            <div className="pagination mt-60">
                <ul>
                    <li><span className="current">1</span></li>
                    <li><Link to="/">2</Link></li>
                    <li><Link to="/">3</Link></li>
                    <li><Link to="/"><FaAngleRight /></Link></li>
                </ul>
            </div>
        </>
    )
}

export default Pagination;