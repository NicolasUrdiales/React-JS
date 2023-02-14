import React from "react"
import './navbar.css'
const Navbar = ({children}) => {
    return(
        <header className="header">{children}</header>
    );
};
export default Navbar;