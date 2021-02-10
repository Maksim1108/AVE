import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from '../filter/index'
import Products from '../products/index'
import Card from '../products/card'

const Shop = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3000/database.json`).then(
      ({ data }) => setProducts(data.products)
    )
  }, [])
  
  return (
    <div className="shop">
      <div className="container-2">
        <div className="shop__content">
          <Filter />
          <div className="products">
            <div className="container-2">
              <div className="products__row row">
                {products.map((item) => (
                  <Card {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
