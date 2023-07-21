import React from 'react';

import './travelGuide.scss';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const TravelGuide = () => {
    return (
        <div className='travelGuide'>
            <div className='travelGuide__wrapper'>
                <div className='travelGuide__title'>
                    <h1>
                        Immerse Yourself in Indonesia: Let the Adventure Begin!
                    </h1>
                    <button>
                        See the complete list of requirements
                        <BsFillArrowRightCircleFill className='arrowRIcon' />
                    </button>
                </div>
                <p className='travelGuide__desc'>
                    Before planning your visit to Indonesia, it is crucial to
                    ensure that you thoroughly study and understand all the
                    immigration requirements that need to be fulfilled. This
                    includes obtaining the necessary visas, permits, and any
                    other documents that are essential for entry into the
                    country. Familiarizing yourself with these requirements in
                    advance will help ensure a smooth and hassle-free travel
                    experience
                </p>
            </div>
        </div>
    );
};

export default TravelGuide;
