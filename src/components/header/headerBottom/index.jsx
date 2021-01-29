import React from 'react'

const HeaderBottom = () => {
    return (
        <div className='header-bottom'>
            <div className="container-2">
                <div className="header-bottom__content row">
                    <span className="header-bottom__logo"><span>avenue</span> fashion</span>
                    <div className="header-bottom__nav">
                        <ul className="header-bottom__list flex">
                            <li className="header-bottom__item"><a href="#" className="header-bottom__link">mens</a></li>
                            <li className="header-bottom__item"><a href="#" className="header-bottom__link">womans</a></li>
                            <li className="header-bottom__item"><a href="#" className="header-bottom__link">the brand</a></li>
                            <li className="header-bottom__item"><a href="#" className="header-bottom__link">local stores</a></li>
                            <li className="header-bottom__item"><a href="#" className="header-bottom__link">look book</a></li>
                        </ul>
                        <input placeholder="Search" type="text" className="header-bottom__search"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom