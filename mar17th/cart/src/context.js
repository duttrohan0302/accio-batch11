import React, { useContext, useEffect, useReducer } from "react";

import CartItems from "./data"
import reducer from "./reducer"

const AppContext = React.createContext()
const inititalState = {
    loading: false,
    cart:CartItems,
    total:0,
    amount:0
}
const AppProvider = ({children}) =>{
    const [state,dispatch] = useReducer(reducer,inititalState)

    const clearCart = () => {
        dispatch({type:"CLEAR_CART"})
    }
    const remove = (id) => {
        dispatch({type:"REMOVE",payload:id})
    }
    const increase = (id) => {
        dispatch({type: "INCREASE", payload:id})
    }
    const decrease = (id) => {
        dispatch({type: "DECREASE", payload:id})
    }

    useEffect(()=>{
        dispatch({type:"GET_TOTALS"})
    },[state.cart])
    return(
        <AppContext.Provider 
            value={
                {
                ...state,
                clearCart,
                remove,
                increase,
                decrease
                // functions,
                }
            }
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}