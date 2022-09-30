import React from 'react';
import './Excercise.css'
const Excercise = (props) => {

    const{excercise,handleAddToCart } = props;
   const{picture , name, time}=props.excercise;
  
    return (
        <div className='gym'>
            <img src={picture} alt="" />
           <div className="gym-info">
                <p className='gym-name'>{name}</p>
                <p >Time :<span id='time'> {time} </span>Sec</p>
           </div>
           <button id='btn' onClick={()=>handleAddToCart(excercise)} className='btn-select'> <p>Add To List</p> </button>
        </div>
    );
};

export default Excercise;