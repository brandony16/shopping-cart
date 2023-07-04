import React from "react";

const NavBar = ({
  currGen,
  handleMen,
  handleWomen,
  handleShirt,
  handlePants,
  handleSweater,
  handleJacket,
  handleDress,
}) => {
  return (
    <div className="navBar">
      <div className="genderSelect">
        <button className={currGen === "men" ? "men selected" : "men"} onClick={handleMen}>
          Men's
        </button>
        <button className={currGen === "women" ? "women selected" : "women"} onClick={handleWomen}>
          Women's
        </button>
      </div>
      <div className="clotheCategories">
        <button className="category" onClick={handleShirt}>Shirts</button>
        <button className="category" onClick={handlePants}>Pants</button>
        <button className="category" onClick={() => currGen === "men" ? handleSweater : handleDress}>
          {currGen === "men" ? "Sweatshirts" : "Dresses"}
        </button>
        <button className="category" onClick={handleJacket}>Jacket</button>
      </div>
    </div>
  );
};

export default NavBar;
