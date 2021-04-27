import React from 'react'
import * as Icon from 'react-feather'

import '../App.css'
import logo2 from '../Logo/Logo2.png'

export default function Navbar() {

    return (
        <div className='sidebar'>
            <img className='logo' src={logo2} alt='CryptoTracker Logo' />
            <span className='navlink'>
                <Icon.Home className='navlink-icon'/>
                <h1 className='navlink-name'>Home</h1>
            </span>
            <span className='navlink'>
                <Icon.Eye className='navlink-icon'/>
                <h1 className='navlink-name'>Watching</h1>
            </span>
            <span className='navlink'>
                <Icon.DollarSign className='navlink-icon'/>
                <h1 className='navlink-name'>Market</h1>
            </span>
            <span className='navlink'>
                <Icon.BookOpen className='navlink-icon'/>
                <h1 className='navlink-name'>News</h1>
            </span>
            <span className='navlink'>
                <Icon.Bell className='navlink-icon'/>
                <h1 className='navlink-name'>Notifications</h1>
            </span>
        </div>
    )
}
