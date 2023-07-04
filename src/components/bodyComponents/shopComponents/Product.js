import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import { NavLink } from "react-router-dom";
import "../../../styles/ShopStyles/Product.css"

const Product = ({ product }) => {
  return (
    <div className="productPage">
      <Header />
      <div className="productBody">
          <NavLink to="/shop" className="back"> &lt; Go Back</NavLink>
          <div className="productContent">
            <img className="productImg" src={product.img} alt={product.name} />
            <div className="infoWrap">
              <p className="name">{product.name}</p>
              <div className="priceWrap">
                  <p className="priceDollar">{product.price.split(".")[0]}</p>
                  <p className="priceCent">{product.price.split(".")[1]}</p>
              </div>
              <select name="size" id="size" className="size">
                <option value="S">S - Small</option>
                <option value="M">M - Medium</option>
                <option value="L">L - Large</option>
                <option value="XL">XL - Extra Large</option>
              </select>
              <button className="addCart">Add to Cart</button>
            </div>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
