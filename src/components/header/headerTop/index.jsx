import React from 'react'

const HeaderTop = () => {
    return (
        <div className='header-top'>
            <div className="container-1">
                <div className="header-top__content row">
                    <span className="header-top__left">Currency : GBP</span>
                    <div className="header-top__right">
                        <a href='#' className='header-top__register'>Register</a>
                        <a href='#' className='header-top__register'>Sign In</a>
                        <a href='#' className="header-top__busket">empty</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop
