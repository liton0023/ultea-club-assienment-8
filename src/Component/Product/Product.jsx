import React from 'react';
import './Product.css';
const Product = (props) => {
    console.log(props.product)
   const {name,img,age,time,detail}=props.product;
    return (
        <div className='product-container'>
            <div className='product-info'>
                <img src={img} alt="" />
                <h1>{name}</h1>
                <p className='details'>{detail}</p>
                <p>For-Age:{age}</p>
                <p>Time required:{time}</p>
            </div>
            <button className='product-btn'>Add To List</button>
        </div>
    );
};

export default Product;