import React, { useState, useEffect } from 'react'
import Filter from '../filter/index'
import Products from '../products/index'


const Shop = () => {
    return (
        <div className='shop'>
            <div className="container-2">
                <div className="shop__content">
                    <Filter />
                    <Products />
                </div>
            </div>
        </div>
    )
}

export default Shop
