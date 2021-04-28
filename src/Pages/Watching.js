import React, { useState } from 'react'

import Header from '../Components/Header'

export default function Watching() {
    
    const [pageName] = useState('Watching')

    return (
        <div className='watching'>
            <span className='header-container'>
                <Header pageName={pageName}/>
            </span>
            <span className='watching-feed'>
                <h1>Watching</h1>
            </span>
        </div>
    )
}
