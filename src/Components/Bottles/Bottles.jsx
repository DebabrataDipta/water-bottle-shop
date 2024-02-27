import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    
    useEffect(()=>{
        fetch('bottles.json')
        .then(response => response.json())
        .then(data => setBottles(data))
    }, []);


  return (
    <div>
      {/* Your component code goes here */}
      <h2>Bottles Here: {bottles.length}</h2>
      <div className="bottle-container">
      {
        bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
      }
      </div>
    </div>
  );
};

export default Bottles;