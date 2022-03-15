import React,{useState,useRef,useEffect} from "react" 

const UseRefComp = () => {
    const [inputValue,setInputValue] = useState("")

    // const [count,setCount] = useState(0)

    // causes an infinite loop because setCount causes the component to be re-rendered
    // useEffect(()=>{
    //     setCount(count+1)
    // },[count])
    const count = useRef(0)
    // count={
    //     current:0
    // }
    // this will run everytime the component re-renders
    useEffect(()=>{
        count.current=count.current+1
    })
    return(
        <>
            <input type="text" value={inputValue} onChange={e=>setInputValue(e.target.value)}/>
            <h1>Render count:{count.current}</h1>
        </>
    )
}
const useRefComp2 = () => {

    const inputElement = useRef();

    const focusInput = () => {
        console.log(inputElement)
        inputElement.current.focus()
    }
    return(
        <>
            <input type="text" ref={inputElement}/>
            <button onClick={focusInput}>Focus Input</button>
        </>
    )
}



export default useRefComp2;