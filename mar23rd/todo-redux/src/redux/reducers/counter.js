import { ADD_COUNTER,RESET_COUNTER } from "../actions/actions.types";

const initialState = {
    amount:0,
    name: "rohan"
}

const counter = (state=initialState,action) => {

    switch(action.type){
        case ADD_COUNTER:
            console.log(state,action)
            return {
                ...state,amount:state.amount+1
                // amount:++state.count
            }
        case RESET_COUNTER:
            return{
                amount: action.count
            }
        default:
            return state;
    }
}

export default counter;