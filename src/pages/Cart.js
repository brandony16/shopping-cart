import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartBody from "../components/bodyComponents/CartBody";

const Cart = ({ cart, handleQuantityChange, subtotal, handleDeleteProduct, amountInCart }) => {
    return (
        <div className="cart">
            <Header amountInCart={amountInCart}/>
            <CartBody cart={cart} handleQuantityChange={handleQuantityChange} subtotal={subtotal} handleDeleteProduct={handleDeleteProduct} />
            <Footer />
        </div>
    )
}

export default Cart