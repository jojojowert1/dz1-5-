import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

const CountPage = () => {
    const [count, setCount]= useState(0)
    const plus = ()=>{
        setCount(count+1)
    }
    const minus = ()=>{
        setCount(count-1)
    }
    const plusTen = ()=>{
        setCount(count+10)
    }
    const minusTen = ()=>{
        setCount(count-10)
    }
    const reset = ()=>{
        setCount(0)
    }
    if (count < 0){
        alert('Число не должно быть меньше нуля!')
        setCount(0)
    }

    // const count = useSelector(state => state)
    // const dispatch = useDispatch()
    //
    // const plus = ()=>{
    //     dispatch({
    //         type: 'PLUS'
    //     })
    // }


    return (
        <div>
            <h1>{count}</h1>

            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={plusTen}>+10</button>
            <button onClick={minusTen}>-10</button>
            <button onClick={reset}>reset</button>
        </div>
    );
};

export default CountPage;