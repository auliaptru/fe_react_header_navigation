import React from 'react';

import './favoriteDestinations.scss';

const FavoriteDestinations = () => {
    return (
        <div className='favorite'>
            <div className='favorite__wrapper'>
                <p>favorite destinations</p>
                <h1>
                    Find your <span>favorite destinations</span> in Indonesia
                </h1>
                <div className='favorite__cards'>
                    <div className='card__wrapper'>
                        <div className='card card1'>
                            <div className='card__texts'>
                                <h3 className='name'>Borobudur Temple</h3>
                                <p className='loc'>Magelang, Central Java</p>
                                <p className='price'>
                                    IDR 50.000-220.000/people
                                </p>
                            </div>
                        </div>
                        <div className='card card2'>
                            <div className='card__texts'>
                                <h3 className='name'>
                                    Ulun Danu Beratan Temple
                                </h3>
                                <p className='loc'>Lake Batur, Bali</p>
                                <p className='price'>
                                    IDR 20.000-30.000/people
                                </p>
                            </div>
                        </div>
                        <div className='card card3'>
                            <div className='card__texts'>
                                <h3 className='name'>Toba Lake</h3>
                                <p className='loc'>
                                    Samosir Lake, North Sumatra
                                </p>
                                <p className='price'>IDR 10.000/people</p>
                            </div>
                        </div>
                        <div className='card card4'>
                            <div className='card__texts'>
                                <h3 className='name'>Mount Bromo</h3>
                                <p className='loc'>Probolinggo, East Java</p>
                                <p className='price'>
                                    IDR 29.000-220.000/people
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavoriteDestinations;
