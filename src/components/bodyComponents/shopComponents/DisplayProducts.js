import React from "react";
import { NavLink } from "react-router-dom";
import "../../../styles/ShopStyles/DisplayProducts.css";

const DisplayProducts = ({ productList }) => {
    return (
        <div className="productDisplay">
            {productList.map((product) => (
                <NavLink key={productList.indexOf(product)} className="productCard" to={`/shop/${product.name.replace(/\s/g, "-")}` }>
                    <div className="imgWrap" >
                        <img src={product.img} alt={product.name} className="img"/>
                    </div>
                    <p className="name">{product.name}</p>
                    <p className="price">{product.price}</p>
                </NavLink>
            ))}
        </div>
    )
}

export default DisplayProducts;