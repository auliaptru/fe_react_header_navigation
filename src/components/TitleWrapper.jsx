import React from 'react';

import './titleWrapper.scss';

const TitleWrapper = (title1, title2, span) => {
    return (
        <div className='titleWrapper'>
            <p>{title1}</p>
            <h1>{title2}</h1>
        </div>
    );
};

export default TitleWrapper;
