import React, {useState, useEffect} from 'react'
import Filter from '../filter/index'
import Products from '../products/index'
import axios from 'axios';

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios
        .get(`http://localhost:3000/database.json`)
        .then((response) => response.data)
        .then(({products}) => {
            setProducts(products);
        });
    }, []);
    return (
        <div className='shop'>
            <div className="container-2">
                <Filter />
                <Products />
            </div>
        </div>
    )
}

export default Shop
