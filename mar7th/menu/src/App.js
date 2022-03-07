import React, { useState } from "react";
import items from "./data";
import Categories from "./Categories";
import Menu from "./Menu"

import './App.css';

// const allCategories = ["All","Breakfast","Lunch","Shakes"]
const allCat = items.map(item=>item.category)
const tempSet = new Set(allCat)
let tempArr = [...tempSet]

// 1st way
const finalArr = ["all",...tempArr]

//2nd way
tempArr.unshift("all")
console.log(tempArr,finalArr)

const allCategories = ["all",...new Set(items.map((item)=>item.category))]

const App = () => {

    const [menuItems,setMenuItems] = useState(items)
    const [categories,setCategories] = useState(allCategories)


    const filterItems = (categoryName) => {
        if(categoryName === "all"){
            setMenuItems(items)
        }else{
            const newItems = items.filter((item)=>item.category===categoryName)
            setMenuItems(newItems)
        }
    }
    return(
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Our Menu</h2>
                    <div className="underline"></div>    
                </div>
                <Categories categories={categories} filterItems={filterItems}/>
                <Menu items = {menuItems} />
            </section>
        </main>
    )

}

export default App;