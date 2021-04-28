import React, { useState } from 'react'

import Header from '../Components/Header'

export default function Notifications() {

    const [pageName] = useState('Notifications')
    
    return (
        <div className='notifications'>
            <span className='header-container'>
                <Header pageName={pageName}/>
            </span>
            <span className='notifications-feed'>
                <h1>Notifications</h1>
            </span>
        </div>
    )
}
