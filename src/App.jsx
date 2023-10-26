import { useState, useEffect } from "react";
import Navbar from "./COMPONENTS/Navbar/index";
import "./App.css";
import QualityPolicy from "./PAGES/QualityPolicy/index";
import Facilities from "./PAGES/Facilities/index";
import Home from "./PAGES/Home/index";
import About from "./PAGES/About/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./COMPONENTS/Footer/index";
import Contact from "./PAGES/Contact/index";

import Cart from "./PAGES/Cart/index";
import Bread from "./PAGES/Bread";
import React from "react";
import Categories from "./COMPONENTS/Categories/index";
import axios from "axios";
import Product from "./COMPONENTS/Product/Product";
export const AllClickedProdut = React.createContext();
export const AllMenuContext = React.createContext();
export const AllWishlistProduct = React.createContext();
export const AllCategoryProducts = React.createContext();
function App() {
  var [product, setProduct] = useState({ products: [], totalCount: 0 });
  var [wishlist, setWishlist] = useState([]);

  const [homeData, setHomeData] = React.useState({});

  useEffect(() => {
    axios
      .get("https://api.goldenloafuae.com/api/home")
      .then((response) => setHomeData(response?.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="app">
        <Router>
          <AllWishlistProduct.Provider value={{ wishlist, setWishlist }}>
            <AllClickedProdut.Provider value={{ product, setProduct }}>
              <Navbar />

              <Routes>
                <Route path="/" element={<Home homeData={homeData} />} />
                <Route path="/home/about" element={<About />} />
                <Route path="/home/facilities" element={<Facilities />} />
                <Route path="/Home/QualityPolicy" element={<QualityPolicy />} />
                <Route path="/Home/Contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />

                <Route path="Home/category/PageBread" element={<Bread />} />
                <Route path="categories/:categoryid" element={<Categories />} />
                <Route path="product/:slugname" element={<Product />}></Route>
              </Routes>

              <Footer categories={homeData?.categories} />
            </AllClickedProdut.Provider>
          </AllWishlistProduct.Provider>
        </Router>
      </div>
    </>
  );
}

export default App;
