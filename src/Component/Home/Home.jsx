import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from './Cart/Cart';
import './Home.css';

const Home = () => {
const [products,setProducts]=useState([]);

useEffect(()=>{
    fetch('product.JSON')
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[])

    return (    
        <div>
            <div className='header-section'>
        <h2>UtRA-Active-club</h2>
            <h3>Select today’s exercise</h3>
            </div>
            <div className='club-container'>       
                <div className='products-container'>          
{
    products.map(product=><Product id={product.id} product={product}></Product>)
}
                </div>
                <div className='cart-container'>
                   <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;