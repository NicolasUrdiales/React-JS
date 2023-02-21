import React from "react"
import CartWidget from "./Carrito";
import './navbar.css'
const Navbar = () => {
    return(
    <header className="header">        
        <div>
            <img src=''/>
        </div>
        <nav>
            <a className='a-nav'>Inicio</a>
            <a className='a-nav'>Mis compras</a>
            <CartWidget/>
        </nav>
    </header>
    );
};
export default Navbar;