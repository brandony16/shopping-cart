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
                    <div className="infoWrap">
                        <p className="name info">{product.name}</p>
                        <p className="price info">{product.price}</p>
                    </div>
                </NavLink>
            ))}
        </div>
    )
}

export default DisplayProducts;