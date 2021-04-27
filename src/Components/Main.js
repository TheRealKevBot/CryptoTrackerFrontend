import React, { Component } from 'react'

import Header from './Header'

export default class Main extends Component {

    state = {
        user: []
    }

    render() {
        return (
            <div className='main'>
                <Header />
                <div className='feed'>

                </div> 
            </div>
        )
    }
}
