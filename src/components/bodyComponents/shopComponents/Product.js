import React, { useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import { NavLink } from "react-router-dom";
import shoppingBag from "../../../assets/shopping-bag.png";
import "../../../styles/ShopStyles/Product.css";

const Product = ({ product, addToCart, amountInCart }) => {
  const [size, setSize] = useState("S");


  const handleButtonAnim = (e) => {
    e.target.classList.add("submitted");
    setTimeout(() => {
      e.target.classList.remove("submitted");
    }, 300);
  }

  return (
    <div className="productPage">
      <Header amountInCart={amountInCart}/>
      <div className="productBody">
        <NavLink to="/shop" className="back">
          {" "}
          &lt; Go Back
        </NavLink>
        <div className="productContent">
          <div className="productImgWrap">
            <img className="productImg" src={product.img} alt={product.name} />
          </div>
          <div className="productInfo">
            <p className="productName">{product.name}</p>
            <div className="priceWrap">
              <p className="priceDollar">{product.price.split(".")[0]}</p>
              <p className="priceCent">{product.price.split(".")[1]}</p>
            </div>
            <select
              name="size"
              id="size"
              className="size"
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="S">S - Small</option>
              <option value="M">M - Medium</option>
              <option value="L">L - Large</option>
              <option value="XL">XL - Extra Large</option>
            </select>
            <button
              className="addCart"
              onClick={(e) => {addToCart(product, size); handleButtonAnim(e)}}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <NavLink to="/cart" className="cartBtn">
          <img src={shoppingBag} alt="cart" className="cartImg" />
          <div
            className={amountInCart > 0 ? "cartAmount visible" : "cartAmount"}
          >
            {amountInCart > 0 ? amountInCart : ""}
          </div>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
