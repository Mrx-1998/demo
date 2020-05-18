import React from 'react'
import './style.less'
import logo from './logo.jpg'

const Logo = () => {
    return(
        <div className='logo-container'>
            <img className="logo-img" src={ logo } alt=""/>
        </div>
    )
}

export default Logo