import React from 'react';
import './Laptop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Laptop = ({laptop, addToCart}) => {
    const {image, name, price} = laptop;
    return (
        <div className='laptop-info'>
            <img src={image} alt=""/>
            <h4>Name: {name}</h4>
            <p>Price: {price}</p>
            <button onClick={()=>addToCart(laptop)} className='btn'><h4>Add to Cart</h4>   <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Laptop;