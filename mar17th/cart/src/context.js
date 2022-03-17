import React, { useContext, useReducer, useState } from "react";

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
    return(
        <AppContext.Provider 
            value={
                {
                ...state,
                clearCart
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