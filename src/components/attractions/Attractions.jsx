import React from 'react';

import './attractions.scss';

const data = [
    {
        id: 1,
        name: 'culture and beliefs',
        bg: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=338&q=80',
    },
    {
        id: 2,
        name: 'arts and crafts',
        bg: 'https://images.unsplash.com/photo-1586319826907-1ff4aadbaddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=570&q=80',
    },
    {
        id: 3,
        name: 'culinary',
        bg: 'https://images.unsplash.com/photo-1529563021893-cc83c992d75d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    },
    {
        id: 4,
        name: 'history',
        bg: 'https://images.unsplash.com/photo-1588420076794-b3dc845f77f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=590&q=80',
    },
    {
        id: 5,
        name: 'nature and wildlife',
        bg: 'https://images.unsplash.com/photo-1580844946486-f08607088f08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=335&q=80',
    },
];

const Attractions = () => {
    return (
        <div className='attractions'>
            <div className='attractions__wrapper'>
                <p className='title1'>Popular Attractions</p>
                <h1 className='title2'>
                    Explore Indonesia's <span>attractions</span>
                </h1>
                <div className='attractions__cards'>
                    {data.map((item) => (
                        <div
                            key={item.id}
                            // style={{ background: `url('${item.bg}')` }}
                            className='card'
                        >
                            <div
                                className='card__bg'
                                style={{ background: `url('${item.bg}')` }}
                            />
                            <p className='card__name'>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Attractions;
