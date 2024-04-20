import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from './AppContext';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Product from './Components/Product';
import ProductDetail from './Components/ProductDetail';
import Cart from './Components/Cart';
import Header from './Components/Header';


const App = () => {
    return (
        <div>
            <AppProvider>
                <BrowserRouter>
                <Header/>
                <Routes>
                <Route index element={<Home/>}></Route>
                <Route path='/footer' element={<Footer/>}></Route>
                <Route path='/product' element={<Product/>}></Route>
                <Route path='/product/:id' element={<ProductDetail/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                
                </Routes>
                </BrowserRouter>
            </AppProvider>
        </div>
    );
}

export default App;
