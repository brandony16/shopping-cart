import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopBody from "../components/bodyComponents/ShopBody";

const Shop = () => {
    return (
        <div className="shop">
            <Header />
            <ShopBody />
            <Footer />
        </div>
    )
}

export default Shop