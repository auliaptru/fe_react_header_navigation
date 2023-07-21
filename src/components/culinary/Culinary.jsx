import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

import './culinary.scss';

const data = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1533982308550-6aa193da8eae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=867&q=80',
        title: "Pecel: Exploring the Delightful Flavors of East Java's Traditional Dish",
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1528034441002-cdbf746744b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        title: "Indonesia's Snack Culture: Diving into the Delicious Traditions of Indonesian Street Snacks",
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1645696329525-8ec3bee460a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1029&q=80',
        title: 'Mie Goreng: Exploring the Iconic Indonesian Fried Noodles',
    },
];

const Culinary = () => {
    return (
        <div className='culinary'>
            <p className='title1'>food highlights</p>
            <h1 className='title2'>
                try <span>authentic</span> Indonesian food
            </h1>
            <div className='culinary__wrapper'>
                <div className='culinary__cards'>
                    {data.map((item) => (
                        <div className='card' key={item.id}>
                            <div className='card__img'>
                                <img src={item.img} alt={`food-${item.id}`} />
                            </div>
                            <div className='card__text'>
                                <h3>{item.title}</h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Sed tempora saepe ea omnis
                                    nisi recusandae tempore ipsa! Inventore,
                                    iste optio?
                                </p>
                                <button>
                                    <a href=''>Read More</a>
                                    <BsFillArrowRightCircleFill className='arrowRIcon' />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='culinary__img'>
                    <div className='culinary__img-bg'></div>
                    <div className='culinary__img-text'>
                        <p>Lihat berbagai rujak</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Culinary;
