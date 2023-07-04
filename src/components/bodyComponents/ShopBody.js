import React from "react";
import NavBar from "./shopComponents/NavBar";

const ShopBody = () => {
  return (
    <div className="shopBody">
      <NavBar currGen="men" />
      <div className="products"></div>
    </div>
  );
};

export default ShopBody;
