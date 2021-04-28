import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom';

import Header from './Header'

import Home from '../Pages/Home'
import Market from '../Pages/Market'
import News from '../Pages/News'
import Notifications from '../Pages/Notifications'
import Watching from '../Pages/Watching'

export default class Main extends Component {

    state = {
        user: []
    }

    render() {
        return (
            <div className='main'>
                <div className='feed'>
                    <Route exact path='/' render={ (routerProps) => <Home />} />
                    <Route exact path='/Market' render={ (routerProps) => <Market /> } />
                    <Route exact path='/News' render={ (routerProps) => <News /> } />
                    <Route exact path='/Notifications' render={ (routerProps) => <Notifications /> } />
                    <Route exact path='/Watching' render={ (routerProps) => <Watching /> } />
                </div> 
                <Redirect to='/' />
            </div>
        )
    }
}
