import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AppContext } from '../AppContext';

const Header = () => {
    const{cart}=useContext(AppContext)
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/cart"><p>Cart:{cart.length}</p></Link>
            
            
        </div>
    );
}

export default Header;
