import React from 'react';
import Navbar from './components/navbar/Navbar';

import './app.scss';
import Home from './components/home/Home';
import FavoriteDestinations from './components/favorite/FavoriteDestinations';
import Attractions from './components/attractions/Attractions';
import Gallery from './components/gallery/Gallery';
import Culinary from './components/culinary/Culinary';
import Footer from './components/footer/Footer';
import TravelGuide from './components/travelguide/TravelGuide';

// https://www.figma.com/community/file/1210601516714970320/Destinize---Travel-Website-Landing-Page

const App = () => {
    return (
        <div>
            <div className='app__wrapper'>
                <Navbar />

                <div id='home'>
                    <Home />
                </div>
                <div id='destinations'>
                    <FavoriteDestinations />
                </div>
                <div id='attractions'>
                    <Attractions />
                </div>
                <div id='gallery'>
                    <Gallery />
                </div>
                <div id='culinary'>
                    <Culinary />
                </div>
                <div id='travelguide'>
                    <TravelGuide />
                </div>
                <div id='contact'>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default App;
