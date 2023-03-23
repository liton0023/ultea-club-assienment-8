import React from 'react';
import './Product.css';
const Product = (props) => {
    console.log(props.product)
   const {name,img,age,time}=props.product;
    return (
        <div className='product-container'>
            <div className='product-info'>
                <img src={img} alt="" />
                <h1>{name}</h1>
                <p>Age:{age}</p>
                <p>Time:{time}</p>
            </div>
            <button className='product-btn'>Add To List</button>
        </div>
    );
};

export default Product;