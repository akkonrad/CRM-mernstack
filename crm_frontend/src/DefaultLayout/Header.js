import React from 'react'
import logo from './image/crm.jpg'
import './defaultLayout.css'

function Header() {
    return (
        
        <div className='layout-header'>
            <div className='image'>
                <img src={logo}/>
            </div>
            <div>
                Dashboard
            </div>
            <div>
            Tickets
            </div>
            <div className='logout'>
            Logout
            </div>
        </div>
    )
}

export default Header
