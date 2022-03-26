import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = ({item}) => {
    const {image, name, price} = item;
    return (
        <div className='cart-item'>
            <img src={image} alt='' />            
            <h4>{name}</h4>  
            <button><FontAwesomeIcon icon={faTrash} /></button>            
            
            
        </div>
    );
};

export default Cart;