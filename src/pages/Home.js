import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeBody from "../components/bodyComponents/HomeBody";

const Home = ({ amountInCart }) => {
    return (
        <div className="home">
            <Header amountInCart={amountInCart}/>
            <HomeBody />
            <Footer />
        </div>
    )
}

export default Home