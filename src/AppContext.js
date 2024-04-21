import { createContext, useState, useEffect } from "react";
import Swal from 'sweetalert2'
import axios from 'axios';
export const AppContext = createContext({})
export function AppProvider({ children }) {
    const [count, setCount] = useState(1)
    const [products, setProducts] = useState(null)
    const [cart, setCart] = useState([])
    const getData = () => {
        const url = 'https://66124e8c95fdb62f24ee62fe.mockapi.io/product'
        axios.get(url).then(res => {
            setProducts(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        getData()
    }, [])
    const addCart = (id) => {
        const pro = products.find(item => item.id == id)
        const index = cart.findIndex(item => item.id == id)
        if (index >= 0) {
            const newcart = cart
            newcart[index]['qty']++
            setCart(newcart)
        }
        else {
            setCart([...cart, { ...pro, qty: 1 }])
        }
        
        Swal.fire("SweetAlert2 is working!");
    }

    const remove = (id) => {
        setCart(cart.filter(item => item.id != id))
    }
    const updateQty = (id, num) => {
        setCart(cart.map(item => item.id == id && !(item.qty == 1 && num == -1) ? { ...item, qty: item.qty + num } : item))
    }
    return (
        <AppContext.Provider value={{ count, setCount, addCart, cart, remove, updateQty }}>
            {children}
        </AppContext.Provider>
    )
}