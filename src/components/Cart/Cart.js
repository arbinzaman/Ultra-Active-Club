import React, { useState } from 'react';
import { toast } from 'react-toastify';
import '../Excercises/Excercises.css'
import './Cart.css'


const Cart = ({ cart }) => {
    // console.log(cart)
    let total = 0;
    for (const excercise of cart) {
        total = total + excercise.time;
       

    }
    const breakTime = [
        { id: 1, breakTime: 10 },
        { id: 2, breakTime: 15 },
        { id: 3, breakTime: 30 },
        { id: 4, breakTime: 45 },
        { id: 5, breakTime: 60 }
    ];
    const [times, setTimes] = useState(
        parseInt(localStorage.getItem("breakTime")) || 0

    );
    const addBreakTime = (breakTime) => {
      
        localStorage.setItem("breakTime", breakTime)
        setTimes(breakTime)

    };




    return (
        <div>
            <div className='user'>
                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className='user-img' />
                <p>Arbin Zaman</p>

            </div>
            <div className='user-info'>
                <p>75 kg</p> <p>6.5</p><p>25 yrs</p>
                <p>weigth</p><p>Height</p><p>Age</p>
            </div>

            <p>Add A Break</p>
            <div className="break-point">
                {breakTime.map((time) => (
                    <button key={time.id} onClick={() => addBreakTime(time.breakTime)}>{time.breakTime}</button>))}
            </div>

            <p>Excercise Details</p>


            <div className="excercise-details">
                <p>Excercise Time</p>
                <p><span id='excercise-time'>{total}</span> Seconds</p>
                <p>Break Time</p>
                <p><span id='breakTime'> {times} </span> Seconds</p>
            </div>
            <p className='btn-activity-complet' onClick={() => toast.success("Your Data Updated")}>
                Activity Completed
            </p>
        </div>
    );
};

export default Cart;