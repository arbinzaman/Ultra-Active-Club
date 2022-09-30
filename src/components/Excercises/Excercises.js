import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Excercise from '../Excercise/Excercise';
import Questions from '../Questions/Questions';
import './Excercises.css'
const Excercises = () => {

        const [excercises, setExcersies] = useState([]);
        const [cart, setCart] = useState([]);

        useEffect(()=>{
            fetch('data.json')
            .then(res=>res.json())
            .then (data=> setExcersies(data));
        },[])
        const handleAddToCart =(excercise)=>{
            // console.log(excercise);
            const newCart =[...cart,excercise]
            setCart(newCart);

       
        
    
           }
      

      



       return(
        <div className='gym-container'>
            <div className="excercises-container">
              {
                excercises.map(excercise=><Excercise
                Key={excercise.id}
                excercise={excercise}
                handleAddToCart={handleAddToCart}
                // breakPoints ={breakPoints}
                ></Excercise>)
              }
            </div>
                <div className="calculate-container">
                <Cart
                 cart = {cart}>

                 </Cart>
                

                </div>
            
           <div className="question-answer">
                <Questions></Questions>
            </div>
        </div>
    );
};

export default Excercises;