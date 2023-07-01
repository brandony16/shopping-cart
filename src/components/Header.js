import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="storename">Optimix</div>
            <div className="links">
                <NavLink className="link" to="/">Home</NavLink>
                <NavLink className="link" to="/shop">Shop</NavLink>
                <NavLink className="link" to="/about">About</NavLink>
                <NavLink className="link" to="/cart">Cart</NavLink>
            </div>
        </div>
    )
}

export default Header;