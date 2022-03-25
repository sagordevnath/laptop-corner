import React from 'react';
import './Laptop.css';

const Laptop = ({laptop}) => {
    const {image, name, price} = laptop;
    return (
        <div className='laptop-info'>
            <img src={image} alt=""/>
            <h4>Name: {name}</h4>
            <p>Price: {price}</p>
            <button className='btn'>Add to Cart </button>
        </div>
    );
};

export default Laptop;