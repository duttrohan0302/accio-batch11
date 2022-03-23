import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { addCounter,resetCounter } from "../redux/actions";

const Counter = () =>{

    const {amount} = useSelector(state=>state.counter)
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addCounter())
    }
    const handleReset = () => {
        dispatch(resetCounter())
    }
    return(
        <div>
            <h4>{amount}</h4>
            <button onClick={handleAdd}>ADD</button>
            <button onClick={handleReset}>RESET</button>
        </div>
    )
}

export default Counter;