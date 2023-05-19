import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return(
        <div id="header1">
            <ul>
                <li>
                    <Link to="/">
                        <i className='fa fa-home'></i>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <i className="fa-solid fa-user"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio"> 
                        <i className="fa-solid fa-briefcase"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <i className="fa-solid fa-envelope-open"></i>
                    </Link>
                </li>
            </ul>
        </div>  
    )
}

export default Footer;