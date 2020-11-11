import React, { useState } from 'react';
import Hamburger from '../assets/svg/hamburger-lines.svg';
import HamburgerX from '../assets/svg/hamburger-x-svg.svg';
import { menus } from '../utils/menus';
import { Link } from 'gatsby';

import './header.scss';

const Header = ({ data }) => {

    const [menuClicked, setMenuClicked] = useState(false);

    return (
        <header>
            <button className="menu" onClick={() => setMenuClicked(true)}>
                <img src={Hamburger} alt="hamburger menu" />
            </button>

            {menuClicked ? 
                
                <>
                    <div className="menu-desktop-overlay">
                        <button className="desktop-menu-close" onClick={() => setMenuClicked(false)}>
                            <img src={HamburgerX} alt="hambuger-menu-close" />
                        </button>
                        {menus.map((menu, idx) => <Link className="mobile-menu-item" to={menu.url} key={idx}>{menu.label}</Link>)}
                        <p style={{position: 'absolute', bottom: '0'}}>oliverfeher.com</p>
                    </div>

                    <div className="menu-mobile-overlay">
                        <button className="menu-close" onClick={() => setMenuClicked(false)}>
                            <img src={HamburgerX} alt="hambuger-menu-close" />
                        </button>
                        {menus.map((menu, idx) => <Link className="mobile-menu-item" to={menu.url} key={idx}>{menu.label}</Link>)}
                        <p>oliverfeher.com</p>
                    </div>
                </>
                : null
            }
        </header>
    )
}

export default Header;
