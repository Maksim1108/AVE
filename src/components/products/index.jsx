import React from 'react'
import image from '../../assets/products/product-1.png'

const Products = (id, imageUrl, name, price, category, description) => {

    return (
        <div className='products'>
            <div className="container-2">
                <div className="products__row row">
                    <div className="products__block">
                        <div className="products__block-top">
                            <span className="products__price">89.99$</span>
                            <img className="products__img" src={image} alt="" />
                        </div>
                        <div className="products__block-bottom">
                            <p className="products__name">Womens burnt orange casual tee 89.99$</p>
                            <p className="products__description">Classic casual t-shirt for women on the move.100% cotton.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products