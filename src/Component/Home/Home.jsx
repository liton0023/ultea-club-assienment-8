import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
const [products,setProducts]=useState([]);

useEffect(()=>{
    fetch('product.JSON')
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[])

    return (    
        <div className='club-container'>
                <div className='products-container'>
{
    products.map(product=><Product id={product.id} product={product}></Product>)
}
                </div>
                <div className='cart-container'>
                    <h1>This is card Container</h1>
                </div>
            </div>
    );
};

export default Home;