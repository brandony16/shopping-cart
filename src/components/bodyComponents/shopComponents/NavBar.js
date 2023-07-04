import React from "react";
import "../../../styles/ShopStyles/NavBar.css";

const NavBar = ({
  gender,
  handleGenderChange,
  handleTypeChange,
}) => {
  return (
    <div className="navBar">
      <div className="genderSelectWrap">
        <button className="genderSelect men" onClick={() => handleGenderChange("men")}>
          Men's
        </button>
        <button className="genderSelect women" onClick={() => handleGenderChange("women")}>
          Women's
        </button>
      </div>
      <div className="clotheCategories">
        <button className="category shirt" onClick={() => handleTypeChange("shirt")}>Shirts</button>
        <button className="category pants" onClick={() => handleTypeChange("pants")}>Pants</button>
        <button className={`category ${gender === "men" ? "sweater" : "dress"}`} onClick={() => gender === "men" ? handleTypeChange("sweater") : handleTypeChange("dress")}>
          {gender === "men" ? "Sweatshirts" : "Dresses"}
        </button>
        <button className="category jacket" onClick={() => handleTypeChange("jacket")}>Jackets</button>
      </div>
    </div>
  );
};

export default NavBar;
