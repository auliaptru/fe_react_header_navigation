import React from 'react';
import {
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiOutlineYoutube,
} from 'react-icons/ai';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';

import './footer.scss';

const icons = [
    <AiOutlineInstagram />,
    <AiOutlineTwitter />,
    <FaFacebookF />,
    <FaTiktok />,
    <AiOutlineYoutube />,
];

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__wrapper'>
                <div className='footer__left'>
                    <h2>ExploreIndonesia.com</h2>
                    <p>
                        Welcome to Explore Indonesia! We are a trusted source of
                        information about the beauty and cultural richness of
                        Indonesia. With a mission to introduce Indonesia to the
                        world, we are committed to providing comprehensive
                        travel guides, inspiring stories, and deep insights into
                        destinations across Indonesia. Join us in exploring the
                        beauty of this archipelago and experiencing the
                        unforgettable charm of Indonesia!
                    </p>
                </div>
                <div className='footer__right'>
                    <p>Connect with us: </p>
                    <div className='footer__sosmed'>
                        {icons.map((icon, i) => (
                            <div className='circle' key={i}>
                                {icon}
                            </div>
                        ))}
                    </div>
                    <ul className='footer__policy'>
                        <li>
                            <a href=''>Cookies Policy</a>
                        </li>
                        <li>
                            <a href=''>Privacy Policy</a>
                        </li>
                        <li>
                            <a href=''>Terms of Use</a>
                        </li>
                        <li>
                            <a href=''>Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
