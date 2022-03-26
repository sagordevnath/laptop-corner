import React from 'react';

const Cart = ({item}) => {
    const {image, name, price} = item;
    return (
        <div>
            {/* <img src={image} alt='' />             */}
            <h4>Name: {name}</h4>
            {/* <p>Price: {price}</p>                */}
            
            
        </div>
    );
};

export default Cart;