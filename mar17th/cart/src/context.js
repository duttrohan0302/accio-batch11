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
    const [state,setState] = useReducer(reducer,inititalState)

    return(
        <AppContext.Provider 
            value={
                {
                ...state,
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