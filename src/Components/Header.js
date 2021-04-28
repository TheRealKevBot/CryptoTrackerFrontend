import React from 'react'

export default function Header(props) {
    
    return (
        <div className='header'>
            <span className='header-view'>
                <h1 className='view-name'>{props.pageName}</h1>
            </span>
            <span className='header-view'>
                <h1 className='avatar'>Avatar</h1>
            </span>
        </div>
    )
}
