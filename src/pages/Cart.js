import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartBody from "../components/bodyComponents/CartBody";

const Cart = ({ cart }) => {
    return (
        <div className="cart">
            <Header />
            <CartBody cart={cart}/>
            <Footer />
        </div>
    )
}

export default Cart