import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Product = () => {
    const url='https://66124e8c95fdb62f24ee62fe.mockapi.io/product'
    const [data,setData]=useState(null)
    const getData=()=>{
        axios.get(url).then(res=>{
            setData(res.data)
        }).catch((error)=> {
            console.log(error)
        })
            
        }
        useEffect(()=>{
            getData()
        },[])
            return (
        <div>
            <h1>Danh sach san pham</h1>
            {
                data&&data.map((item,index)=>(
                    <Link to={`/product/${item.id}`}key={index}><div>{item.name}</div></Link>
                ))
            }
        </div>
    );
    }



export default Product;
