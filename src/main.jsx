import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './components/home/Home.jsx';
import FavoriteDestinations from './components/favorite/FavoriteDestinations.jsx';
import './index.css';
import Attractions from './components/attractions/Attractions.jsx';
import Gallery from './components/gallery/Gallery.jsx';
import Culinary from './components/culinary/Culinary.jsx';
import TravelGuide from './components/travelguide/TravelGuide.jsx';
import Footer from './components/footer/Footer.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/destinations',
                element: <FavoriteDestinations />,
            },
            {
                path: '/attractions',
                element: <Attractions />,
            },
            {
                path: '/gallery',
                element: <Gallery />,
            },
            {
                path: '/culinary',
                element: <Culinary />,
            },
            {
                path: '/travelguide',
                element: <TravelGuide />,
            },
            {
                path: '/contact',
                element: <Footer />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
