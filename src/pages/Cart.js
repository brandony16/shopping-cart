import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartBody from "../components/bodyComponents/CartBody";

const Cart = ({ cart, handleQuantityChange, subtotal, handleDeleteProduct }) => {
    return (
        <div className="cart">
            <Header />
            <CartBody cart={cart} handleQuantityChange={handleQuantityChange} subtotal={subtotal} handleDeleteProduct={handleDeleteProduct} />
            <Footer />
        </div>
    )
}

export default Cart