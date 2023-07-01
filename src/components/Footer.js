import React from "react";
import githubImg from "../assets/github-mark.png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footTxt">Made By: Brandon Young 2023</div>
      <a href="https://github.com/BabySparta/shopping-cart" className="ghLogo">
        <img src={githubImg} alt="git hub" className="ghImg" />
      </a>
    </div>
  );
};

export default Footer;