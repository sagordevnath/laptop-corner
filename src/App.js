import './App.css';
import Laptop from './components/Laptop/Laptop';

function App() {
  const laptops = [
    {id: 1, name: 'Apple-Macbook', price: 100000},
    {id: 2, name: 'Lenovo-Yoga', price: 85000},
    {id: 3, name: 'HP-Ellitebook', price: 62000},
    {id: 4, name: 'Dell-inspiron', price: 55000},
    {id: 5, name: 'Asus-Expertbook', price: 43000},
    {id: 6, name: 'Acer-Ferrari', price: 52000},
    {id: 7, name: 'Walton-Passion', price: 30000},
    {id: 8, name: 'Fujitsu-Lifebook', price: 49000},
    {id: 9, name: 'Samsung-Sens', price: 70000},
  ];

  

  return ( 
    <div className = "App" >
    <h1> Laptop Corner </h1> 
    {
      laptops.map(laptop => <Laptop key={laptop.id} laptop={laptop}></Laptop>)
    }
    </div>
  );
}

export default App;