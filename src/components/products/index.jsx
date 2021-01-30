import React from 'react'
// import img from '../../assets/products/product-1.png'

const Products = () => {

    return (
        <div className='products'>
            <div className="container-2">
                <div className="products__row row">
                    <div className="products__block">
                        <span className="products__price">{price}</span>
                        {/* <img className="products__img" src={img} alt=""/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
