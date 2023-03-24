import React from 'react';
import logo from '../../../assets/logo.ico';
import './Cart.css';

const Cart = () => {
    return (
        <div>
            <div className='cart-header'>
                <div>
                <img src={logo} alt="" />
                </div>
                <div>
                <h3>Mahmud</h3>
                <p>Dhaka,Bangladesh</p>
                </div>
            </div>
            <div className='personal-info'>
               <p>75kg Weight</p>
               <p>5.6 Height</p>
               <p>25 yer Age</p>
            </div>
            <h1>Add A Break</h1>
        </div>
    );
};

export default Cart;