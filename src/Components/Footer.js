import React, { useContext } from 'react';
import { AppContext } from '../AppContext';


const Footer = () => {
    const {count,setCount}=useContext(AppContext)
    return (
        <div>
            <p>Count:{count}</p>
            <button onClick={()=>setCount(count+1)}>count up</button>
        </div>
    );
}

export default Footer;
