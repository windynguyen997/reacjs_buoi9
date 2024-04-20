import { createContext, useState, useEffect } from "react";


import axios from 'axios';
export const AppContext=createContext({})
export function AppProvider({children}){
    const[count,setCount]=useState(1)
    const [products,setProducts]=useState(null)
    const [cart,setCart]=useState([])
    const getData=()=>{
        const url='https://66124e8c95fdb62f24ee62fe.mockapi.io/product'
        axios.get(url).then(res=>{
            setProducts(res.data)
        }).catch((error)=> {
            console.log(error)
        })
    }
    useEffect(()=>{
        getData()
    },[])
    const addCart=(id)=>{
        const pro=products.find(item=>item.id==id)
        setCart([...cart,pro])
        console.log(cart)
    }
    return(
        <AppContext.Provider value={{count,setCount,addCart,cart}}>
            {children}
        </AppContext.Provider>
    )
}