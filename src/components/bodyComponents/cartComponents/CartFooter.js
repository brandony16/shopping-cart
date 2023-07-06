import React from "react";
import "../../../styles/CartStyles/CartFooter.css";

const CartFooter = ({ subtotal }) => {

    return (
        <div className="cartFooter">
            <h3 className="checkoutTitle">Checkout</h3>
            <div className="totalWrap">
                <div className="totalTopWrap">
                    <div className="subamountWrap">
                        <p className="subtotal subamount">Subtotal:</p>
                        <p className="subtotal subamount">{subtotal}</p>
                    </div>
                    <div className="subamountWrap">
                        <p className="shipping subamount">Shipping:</p>
                        <p className="shipping subamount">{(subtotal * 0.03).toFixed(2)}</p>
                    </div>
                </div>
                <div className="amountWrap">
                    <p className="total">Total:</p>
                    <p className="total">{(subtotal * 1.03).toFixed(2)}</p>
                </div>
            </div>
            <button className="checkout">Finish Checkout</button>
      </div>
    )
}

export default CartFooter;