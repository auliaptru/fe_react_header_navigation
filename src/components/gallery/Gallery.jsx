import React, { useState } from 'react';
import { FaInstagram, FaArrowRight } from 'react-icons/fa';

import './gallery.scss';

const photos = [
    //sentani
    'https://images.unsplash.com/photo-1603077451848-b4ec08acd405?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    //merapi
    'https://images.unsplash.com/photo-1518070588484-2b53926cba76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&q=80',
    //prambanan
    'https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=306&q=80',
    //gili meno
    'https://images.unsplash.com/photo-1587364125669-354c5735dd2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=332&q=80',
    //labuan bajo
    'https://images.unsplash.com/photo-1535779023901-a39d15762564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=354&q=80',
    //kebun raya bogor
    'https://images.unsplash.com/photo-1656693156830-0a281c6f866c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=370&q=80',
    //rinjani
    'https://images.unsplash.com/photo-1621001481154-a52cbb91fcc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=304&q=80',
    //borobudur
    'https://images.unsplash.com/photo-1589310287002-b26eddda5e6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=369&q=80',
    //raja ampat
    'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&q=80',
    //ijen montaine
    'https://images.unsplash.com/photo-1559273278-31d91743cbb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&q=80',
];

const Gallery = () => {
    const [selected, setSelected] = useState(null);
    const [clicked, setClicked] = useState(false);

    const handleClickCard = (id) => {
        setSelected(id);
        setClicked(true);
    };

    const closePopup = () => {
        setSelected(null);
        setClicked(false);
    };

    const handlePopupClick = (e) => {
        if (e.target === e.currentTarget) {
            closePopup();
        }
    };

    return (
        <div className='gallery'>
            <div className='gallery__wrapper'>
                <p className='title1'>travel inspiration</p>
                <h1 className='title2'>
                    explore <span>the beauty</span> of Indonesian charms
                </h1>
                <div className='gallery__cards'>
                    <div className='card__wrapper'>
                        {photos.map((photo, i) => (
                            <>
                                <div
                                    className='gallery__card'
                                    key={i}
                                    onClick={() => handleClickCard(i)}
                                >
                                    <div
                                        className='card__bg'
                                        style={{ background: `url(${photo})` }}
                                    />
                                    <div className='card__icon'>
                                        <FaInstagram className='igIcon' />
                                    </div>
                                </div>
                                {selected === i && (
                                    <div className='card__clicked'>
                                        <div className='card__clicked-wrapper'>
                                            <div className='text__wrapper'>
                                                <p>
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Commodi optio
                                                    voluptates distinctio odio
                                                    itaque voluptas sed ducimus
                                                    consequuntur voluptatum
                                                    magni?
                                                </p>
                                                <button>
                                                    <a href=''>READ MORE</a>
                                                    <FaArrowRight />
                                                </button>
                                            </div>
                                            <img src={photo} alt='' />
                                        </div>
                                        <div
                                            className='overlay'
                                            onClick={closePopup}
                                        ></div>
                                    </div>
                                )}
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
