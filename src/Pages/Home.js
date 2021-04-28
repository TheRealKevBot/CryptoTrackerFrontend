import React, { useState }from 'react';

import Header from '../Components/Header';

export default function Home() {

    const [pageName, setPageName] = useState('Home')

    return (
        <div className='home'>
            <span className='header-container'>
                <Header pageName={pageName}/>
            </span>
            <span className='home-feed'>
                <h1>Home</h1>
            </span>
        </div>
    )
}
