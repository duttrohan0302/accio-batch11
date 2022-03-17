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
            case 'remove':
                return state.filter((item,index)=>index!==action.index)
            case 'clear':
                return []
            default:
                return state;

        }
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        const action = {
            type: 'add',
            name: inputRef.current.value
        }
        dispatch(action)
        inputRef.current.value=''
    }
    return(
        <>
            <form onSubmit = {handleSubmit}>
                <input ref={inputRef} />
            </form>
            <button onClick={()=>dispatch({type:"clear"})}>Clear List</button>
            {
                items.map((item,index)=>(
                    <li key={item.id}>
                        {item.name}
                        <button 
                            onClick={()=>dispatch({type:'remove',index})}
                            >
                        remove
                        </button>
                    </li>
                ))
            }
        </>
    )

}

export default ShoppingList