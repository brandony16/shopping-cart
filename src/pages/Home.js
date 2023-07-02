import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeBody from "../components/bodyComponents/HomeBody";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <HomeBody />
            <Footer />
        </div>
    )
}

export default Home