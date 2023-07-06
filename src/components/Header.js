import React from "react";
import { NavLink } from "react-router-dom";
import shoppingBag from "../assets/shopping-bag-white.png"
import "../styles/Header.css"

const Header = ({ amountInCart }) => {
    return (
        <div className="header">
            <NavLink className="storename" to="/">Fashion Fusion</NavLink>
            <div className="links">
                <NavLink className="link" to="/">Home</NavLink>
                <NavLink className="link" to="/shop">Shop</NavLink>
                <NavLink className="link" to="/about">About</NavLink>
                <NavLink className="linkImg" to="/cart"><img src={shoppingBag} alt="cart" className="headerCart" /><p className="amountInCart">{amountInCart}</p></NavLink>
            </div>
        </div>
    )
}

export default Header;