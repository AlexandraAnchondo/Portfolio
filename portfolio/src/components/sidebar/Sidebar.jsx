import React from 'react';
import "./sidebar.css";
import Logo from "../../assets/personal_logo_BW.png";

const Sidebar = () => {
    return (
        <div>
        <aside className='aside'>
            <a href='#home' className='nav__logo'>
                <img src={Logo} alt='logo' className='nav__logo' />
            </a>

            <nav className='nav'>
                <div className='nav__menu'>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <a href='#home' className='nav__link'>
                            <i className='icon-home'></i>
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#about' className='nav__link'>
                            <i className='icon-user-following'></i>
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#services' className='nav__link'>
                            <i className='icon-briefcase'></i>
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#resume' className='nav__link'>
                            <i className='icon-graduation'></i>
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#portfolio' className='nav__link'>
                            <i className='icon-layers'></i>
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#blog' className='nav__link'>
                            <i className='icon-puzzle'></i>
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#contact' className='nav__link'>
                            <i className='icon-bubble'></i>
                        </a>
                    </li>
                </ul>
                </div>
            </nav>

            <div className='nav__footer'>
                <span className='copyright'>&copy; 2024.</span>
            </div>

        </aside>
        </div>
    );
}

export default Sidebar;