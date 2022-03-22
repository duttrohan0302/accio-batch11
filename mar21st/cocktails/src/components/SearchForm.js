import React, { useEffect } from "react";

import { useGlobalContext } from "../context";

export default function SearchForm(){

    const {setSearchTerm} = useGlobalContext()
    const searchValue = React.useRef("")
    useEffect(()=>{
        searchValue.current.focus()
    },[])
    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    return (
        <section className="section search">
            <form onSubmit={handleSubmit} className="search-form">
                <div className="form-control">
                    <label htmlFor="name">search your favourite cocktail</label>
                    <input type="text" name="name" id="name" onChange={searchCocktail} ref={searchValue}/>
                </div>
            </form>
        </section>
    )
}