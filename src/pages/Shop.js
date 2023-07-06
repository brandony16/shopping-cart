import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopBody from "../components/bodyComponents/ShopBody";

const Shop = ({ amountInCart }) => {
    return (
        <div className="shop">
            <Header amountInCart={amountInCart}/>
            <ShopBody amountInCart={amountInCart} />
            <Footer />
        </div>
    )
}

export default Shop