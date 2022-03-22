import React,{useState,useEffect, useContext} from "react"
import { useCallback } from "react"

const AppContext = React.createContext()
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppProvider = ({children}) =>{

    const [loading,setLoading] = useState(true)
    const [searchTerm,setSearchTerm] = useState("a")
    const [cocktails,setCocktails] = useState([])
    const fetchDrinks = useCallback(async () =>{
        setLoading(true)
        try{
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json()
            console.log(data)

            const {drinks} = data;

            if(drinks){
                const newCocktails = drinks.map((item)=>{

                    const {
                        idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass
                    } = item

                    return{
                        id: idDrink,
                        name:strDrink,
                        image: strDrinkThumb,
                        info:strAlcoholic,
                        glass: strGlass
                    }
                })
                setCocktails(newCocktails)
            }else{
                setCocktails([])
            }
            setLoading(false)
        }catch(err){
            console.log(err)
        }
    },[searchTerm])
    useEffect(()=>{
        fetchDrinks()
    },[searchTerm,fetchDrinks])
    return (
        <AppContext.Provider 
            value={{
                loading,
                searchTerm,
                cocktails,
                setSearchTerm
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () =>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}