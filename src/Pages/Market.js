import React, { useState } from 'react'

import Header from '../Components/Header'

export default function Market() {
    
    const [pageName, setPageName] = useState('Market')

    return (
        <div className='market'>
            <span className='header-container'>
                <Header pageName={pageName}/>
            </span>
            <span className='market-feed'>
                <h1>Market</h1>
            </span>
        </div>
    )
}
