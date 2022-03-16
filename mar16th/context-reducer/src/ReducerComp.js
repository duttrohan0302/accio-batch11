// let numbers = [1,2,3];

// let sum = numbers.reduce((total,number)=>{
//     return total+number
// },0)
// console.log(sum)
import React, { useReducer } from "react";

function reducer(state,action){
    switch(action.type){
        case "LOGIN":
            return {username:action.payload.username,isAuth: true}
        case "SIGNOUT":
            return {username: "",isAuth:false}
        default:
            return state;
    }
}
const initialState = {
    username: "rohan",
    isAuth: true,
  };
const ReducerComp = () => {

  const [state,dispatch] = useReducer(reducer,initialState)
  const handleLogin = () => {
    dispatch({type:"LOGIN",payload:{username: "Ted"}})
  };

  const handleSignout = () => {
      dispatch({type: "SIGNOUT"})
  };
  return (
    <>
      Current user:{state.username}, isAuthenticated: {state.isAuth===true ? "Yes" : "No"}
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignout}>Signout</button>
    </>
  );
};

export default ReducerComp;
