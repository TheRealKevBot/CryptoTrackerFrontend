import React, { useState } from 'react'

import Header from '../Components/Header'

export default function News() {
    
    const [pageName] = useState('News')

    return (
        <div className='news'>
            <span className='header-container'>
                <Header pageName={pageName}/>
            </span>
            <span className='news-feed'>
                <h1>News</h1>
            </span>
        </div>
    )
}
