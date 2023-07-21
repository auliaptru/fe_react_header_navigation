import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import bg from '../../assets/bg.jpg';
import './home.scss';

const Home = () => {
    return (
        <div className='home'>
            <div className='home__wrapper'>
                <div className='home__text'>
                    <h1>
                        <span>Travel</span>, enjoy and live a new and full life
                    </h1>
                    <p>
                        Discover the enchanting landscapes, rich culture, and
                        unforgettable adventures that await you in Indonesia.
                    </p>
                    <button>See more</button>
                </div>
                <div className='home__img'>
                    <img src={bg} alt='' />
                    <div className='mapPin'>
                        <p>DIY Yogyakarta</p>
                        <FiMapPin className='mapIcon' />
                    </div>
                    <div className='cicleImg'>
                        <img
                            src='https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=875&q=80'
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
