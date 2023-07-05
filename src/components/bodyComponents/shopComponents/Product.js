import React, { useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import { NavLink } from "react-router-dom";
import "../../../styles/ShopStyles/Product.css"

const Product = ({ product, addToCart }) => {
  const [size, setSize] = useState("S");

  return (
    <div className="productPage">
      <Header />
      <div className="productBody">
          <NavLink to="/shop" className="back"> &lt; Go Back</NavLink>
          <div className="productContent">
            <img className="productImg" src={product.img} alt={product.name} />
            <div className="productInfo">
              <p className="productName">{product.name}</p>
              <div className="priceWrap">
                  <p className="priceDollar">{product.price.split(".")[0]}</p>
                  <p className="priceCent">{product.price.split(".")[1]}</p>
              </div>
              <select name="size" id="size" className="size" onChange={(e) => setSize(e.target.value)}>
                <option value="S">S - Small</option>
                <option value="M">M - Medium</option>
                <option value="L">L - Large</option>
                <option value="XL">XL - Extra Large</option>
              </select>
              <button className="addCart" onClick={() => addToCart(product, size)}>Add to Cart</button>
            </div>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
