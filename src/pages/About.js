import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutBody from "../components/bodyComponents/AboutBody";

const About = () => {
    return (
        <div className="about">
            <Header />
            <AboutBody />
            <Footer />
        </div>
    )
}

export default About