import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Cart from "./pages/Cart";
import "./styles/globalStyles.css";
import Product from "./components/bodyComponents/shopComponents/Product";
import ProductList from "./components/utils/ProductList";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, itemSize) => {
    const newProduct = { ...product, size: itemSize, quantity: 1 };
    setCart([...cart, newProduct]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop">
          <Route index element={<Shop />} />
          {ProductList.map((e) => {
            return (
              <Route
                key={e.name}
                path={`/shop/${e.name.replace(/\s/g, "-")}`}
                element={<Product product={e} addToCart={addToCart} />}
              />
            );
          })}
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
