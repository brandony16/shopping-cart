import React, { useEffect, useState } from "react";
import NavBar from "./shopComponents/NavBar";
import DisplayProducts from "./shopComponents/DisplayProducts";
import ProductList from "../utils/ProductList.js";
import "../../styles/BodyStyles/ShopBody.css";

const ShopBody = () => {
  const [gender, setGender] = useState("");
  const [products, setProducts] = useState(ProductList);
  const [type, setType] = useState("");

  useEffect(() => {
    handleGenderChange("men");
  }, []);

  useEffect(() => {
    if (gender === "men") {
      document.querySelector(".men").classList.add("active");
      document.querySelector(".women").classList.remove("active");
    }
    if (gender === "women") {
      document.querySelector(".women").classList.add("active");
      document.querySelector(".men").classList.remove("active");
    }
  }, [gender]);

  useEffect(() => {
    if (type !== "") {
      document.querySelectorAll(".category").forEach((e) => {
        e.classList.remove("active");
      });
      document.querySelector(`.${type}`).classList.add("active");
    }
    if (type === "") {
      document.querySelectorAll(".category").forEach((e) => {
        e.classList.remove("active");
      });
    }
  }, [type]);

  const handleGenderChange = (newGender) => {
    const filteredProducts = ProductList.filter(
      (product) => product.gender === newGender
    );
    setGender(newGender);
    setProducts(filteredProducts);
    setType("");
  };

  const handleTypeChange = (newType) => {
    const filteredProducts = ProductList.filter(
      (product) => product.gender === gender && product.type === newType
    );
    setProducts(filteredProducts);
    setType(newType);
  };

  return (
    <div className="shopBody">
      <NavBar
        gender={gender}
        handleGenderChange={handleGenderChange}
        handleTypeChange={handleTypeChange}
      />
      <DisplayProducts productList={products} />
    </div>
  );
};

export default ShopBody;
