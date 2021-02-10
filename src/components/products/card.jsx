import React from 'react'

const Card = ({ imageUrl, price, name, description }) => {
  return (
    <div className="products__block">
      <div className="products__block-top">
        <span className="products__price">{price}$</span>
        <img className="products__img" src={imageUrl} alt="" />
      </div>
      <div className="products__block-bottom">
        <p className="products__name">{name}</p>
        <p className="products__description">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Card
