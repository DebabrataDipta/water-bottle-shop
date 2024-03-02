import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../../utilites/localStorage";
import Cart from "../../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(()=>{
        fetch('bottles.json')
        .then(response => response.json())
        .then(data => setBottles(data))
    }, []);

    //Load cart from local storage 
    useEffect(()=>{
        console.log('called the useffect', bottles.length);
        if(bottles.length > 0){
            const storedCart = getStoredCart();
            // console.log(storedCart, bottles); 
            const savedCart = []; 
            for(const id of storedCart){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    savedCart.push(bottle);
                }
            }
            console.log('saved cart', savedCart); 
            setCart(savedCart);
        }
    }, [bottles]);
    const handleAddToCart = bottle =>{
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }

    const handleRemoveFromCart = id =>{
        // visual cart remove 
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart); 
        // remove from local storage
        removeFromLS(id);
    }
  return (
    <div>
      {/* Your component code goes here */}
      <h2>Bottles Here: {bottles.length}</h2>
      <Cart cart={cart} handleAddToCart = {handleRemoveFromCart}></Cart>




      <div className="bottle-container">
      {
        bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
      }
      </div>
    </div>
  );
};

export default Bottles;