import React from 'react'
import './style.scss'

const headerTop = () => {
    return (
        <div className='header'>
            <div className="container-1">
                <div className="header__content row">
                    <span className="header__value"></span>
                    <span></span>
                    <span>Register</span>
                    <span>Sign In</span>
                    <span>Basket</span>
                </div>
            </div>
        </div>
    )
}

export default headerTop
