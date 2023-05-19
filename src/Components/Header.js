import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return(
        <header id="header">
            <ul>
                <li>
                    <Link to="/">
                        <span>Home</span>   
                        <i className='fa fa-home'></i>
                    </Link>
                </li>
                <li>
                    <Link to="/about"> 
                        <span>About</span>   
                        <i className="fa-solid fa-user"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio">
                        <span>Portfolio</span> 
                        <i className="fa-solid fa-briefcase"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <span>Contact</span> 
                        <i className="fa-solid fa-envelope-open"></i>
                    </Link>
                </li>
            </ul>
        </header>    
    )
}

export default Header;