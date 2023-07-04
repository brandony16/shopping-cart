import React from "react";
import { NavLink } from "react-router-dom";

const DisplayProducts = ({ productList }) => {
    return (
        <div className="productDisplay">
            {productList.map((product) => (
                <NavLink className="productCard" to={`/shop/${product.name.replace(/\s/g, "-")}`}>
                    <div className="imgWrap">
                        <img src={product.img} alt={product.name} />
                    </div>
                    <p className="name">{product.name}</p>
                    <p className="price">{product.price}</p>
                </NavLink>
            ))}
        </div>
    )
}

export default DisplayProducts;