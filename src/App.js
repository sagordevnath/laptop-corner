import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Laptop from './components/Laptop/Laptop';

function App() {
  const laptops = [
    {id: 1, image: 'http://surl.li/bprbh', name: 'Apple-Macbook', price: 100000},
    {id: 2, image: 'http://surl.li/bprbh', name: 'Lenovo-Yoga', price: 85000},
    {id: 3, image: 'http://surl.li/bprbh', name: 'HP-Ellitebook', price: 62000},
    {id: 4, image: 'http://surl.li/bprbh', name: 'Dell-inspiron', price: 55000},
    {id: 5, image: 'http://surl.li/bprbh', name: 'Asus-Expertbook', price: 43000},
    {id: 6, image: 'http://surl.li/bprbh', name: 'Acer-Ferrari', price: 52000},
    {id: 7, image: 'http://surl.li/bprbh', name: 'Walton-Passion', price: 30000},
    {id: 8, image: 'http://surl.li/bprbh', name: 'Fujitsu-Lifebook', price: 49000},
    {id: 9, image: 'http://surl.li/bprbh', name: 'Samsung-Sens', price: 70000},
  ];

  const [cart, setCart] = useState([]);  

  const addToCart = (laptop) => {        
    const newCart = [...cart, laptop];
    setCart(newCart);
  }
  // show 1 random item in cart
  const handleChooseOne = () => {
    // random select
    const random = Math.floor(Math.random() * (4 - 1)) + 0;
    const newCart = [cart[random]];
    setCart(newCart);
    

    
  }

  const chooseAgain = () => {    
    // cart = [];
    // setCart(cart);
    setCart([]);
    // document.getElementById('ffff').innerHTML = '';
  }

  

  return ( 
    <div className='App'>
      <h1> Laptop Corner </h1> 
      <h3>Choose your favorite Laptop</h3>
      <div className = "main-container" >
        <div className='laptop-container'>
        {
          laptops.map(laptop => <Laptop key={laptop.id} laptop={laptop} addToCart={addToCart}></Laptop>)
        }
        </div>
        <div>
          <div className='cart-container'>
            <h3>Selected Laptop</h3>
            
              {
                cart.map(item => {
                  return <Cart key={item.id} item={item} handleChooseOne={handleChooseOne} chooseAgain={chooseAgain}></Cart>
                })
              }   
                         
            <button onClick={()=>handleChooseOne()}>Choose 1 for me</button>
            <button onClick={()=>chooseAgain()}>Choose again</button>  
                    
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;