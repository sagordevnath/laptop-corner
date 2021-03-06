import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = ({item, handleDelete}) => {
    const {image, name} = item;

   
    return (
        <div className='cart-item'>
            <img src={image} alt='' />            
            <h6>{name}</h6>  
            <button className='delete-btn' onClick={()=>handleDelete(item.id)}><FontAwesomeIcon icon={faTrash} /></button>     
            
        </div>
    );
};

export default Cart;