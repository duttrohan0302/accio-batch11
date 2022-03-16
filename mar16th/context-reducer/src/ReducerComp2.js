import React, { useReducer, useRef } from  "react";

const ShoppingList = () => {

    const inputRef = useRef()
    const [items, dispatch] = useReducer((state,action)=>{

        switch(action.type){

            case 'add':
                return [
                    ...state,
                    {
                        id:state.length,
                        name:action.name
                    }
                ];
            default:
                return state;

        }
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: 'add',
            name: inputRef.current.value
        })
        inputRef.current.value=''
    }
    return(
        <>
            <form onSubmit = {handleSubmit}>
                <input ref={inputRef} />
            </form>
            {
                items.map((item,index)=>(
                    <li key={item.id}>
                        {item.name}
                        {/* <button 
                            onClick={()=>dispatch({type})} */}
                    </li>
                ))
            }
        </>
    )

}

export default ShoppingList