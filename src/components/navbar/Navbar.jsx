import React, { useEffect, useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import './navbar.scss';
import { Link } from 'react-router-dom';

const menu = [
    {
        id: 'home',
        name: 'Home',
    },
    {
        id: 'destinations',
        name: 'Destinations',
    },
    {
        id: 'attractions',
        name: 'Attractions',
    },
    {
        id: 'gallery',
        name: 'Gallery',
    },
    {
        id: 'culinary',
        name: 'Culinary',
    },
    {
        id: 'travelguide',
        name: 'Travel Guide',
    },
    {
        id: 'contact',
        name: 'Contact Us',
    },
];

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [showMenuMobile, setShowMenuMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setShowMenu(window.innerWidth >= 1028);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    });

    const handleToggleNavbar = () => {
        setShowMenuMobile(!showMenuMobile);
    };

    return (
        <div className='navbar'>
            <div className='navbar__wrapper'>
                <div className='nav__logo'>
                    Explore<span>Indonesia</span>
                </div>
                <div className={`nav__menu`}>
                    {showMenu ? (
                        <ul className='menu'>
                            {menu.map((item, i) => (
                                <li
                                    key={i}
                                    onClick={() =>
                                        document
                                            .getElementById(`${item.id}`)
                                            .scrollIntoView({
                                                behavior: 'smooth',
                                            })
                                    }
                                >
                                    <Link to={`/${item.id}`}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className='nav__menu-mobile'>
                            <HiMenuAlt3
                                className='menuIcon'
                                onClick={handleToggleNavbar}
                            />
                            {showMenuMobile && (
                                <ul className='menu__mobile'>
                                    {menu.map((item, i) => (
                                        <li
                                            key={i}
                                            onClick={() =>
                                                document
                                                    .getElementById(
                                                        `${item.id}`
                                                    )
                                                    .scrollIntoView({
                                                        behavior: 'smooth',
                                                    })
                                            }
                                        >
                                            <Link
                                                to={`/${item.id}`}
                                                onClick={handleToggleNavbar}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
