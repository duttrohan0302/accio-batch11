const reducer = (state,action) => {

    if(action.type==="CLEAR_CART"){
        return {...state,cart:[]}
    }
}

export default reducer;