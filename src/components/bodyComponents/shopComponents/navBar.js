import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="genderSelect">
        <NavLink className="mens" to="/shop/mens">
          Men's
        </NavLink>
        <NavLink className="womens" to="/shop/womens">
          Women's
        </NavLink>
      </div>
      <div className="clotheCategories">
        <div className="category">Shirts</div>
        <div className="category">Pants</div>
        <div className="category">Sweater</div>
        <div className="category">Jacket</div>
      </div>
    </div>
  );
};

export default NavBar;
