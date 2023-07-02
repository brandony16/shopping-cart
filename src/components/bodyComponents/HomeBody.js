import React from "react";
import "../../styles/BodyStyles/HomeBody.css";
import { NavLink } from "react-router-dom";
import fashionImg from "../../assets/fashionImg.jpg"

const HomeBody = () => {
  return (
    <div className="homeBody">
      <div className="homeTxtWrap">
        <div className="slogan">
          A blend of <span className="fashion">Fashion</span>, A{" "}
          <span className="fusion">Fusion</span> of style.
        </div>
        <NavLink className="shopNowBtn" to="/shop">Shop Now</NavLink>
      </div>
      <img className="fashionImg" src={fashionImg} alt="girl laying down facing camera with blue hair and a blue and orange dress" />
    </div>
  );
};

export default HomeBody;
