import { useState } from "react";
import Navbar from "./COMPONENTS/Navbar/index";
import "./App.css";
import QualityPolicy from "./PAGES/QualityPolicy/index";
import Facilities from "./PAGES/Facilities/index";
import Home from "./PAGES/Home/index";
import About from "./PAGES/About/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./COMPONENTS/Footer/index";
import Contact from "./PAGES/Contact/index";
import Confectionery from "./PAGES/Confectionery/index";
import Cart from "./COMPONENTS/Cart/index";
import Bread from "./PAGES/Bread";
import React from "react";

export const AllClickedProdut = React.createContext();
export const AllMenuContext = React.createContext();
export const AllWishlistProduct = React.createContext();
function App() {
  
  var [product, setProduct] = useState({ products: [], totalCount: 0 });
  var [wishlist, setWishlist] = useState([]);

  return (
    <>
      <div className="app">
        <Router>
          <AllWishlistProduct.Provider value={{ wishlist, setWishlist }}>
            <AllClickedProdut.Provider value={{ product, setProduct }}>
             
                <Navbar />

                <Routes>
                  <Route path="/" exact Component={Home} />
                  <Route path="/home/about" exact Component={About} />
                  <Route path="/home/facilities" exact Component={Facilities} />
                  <Route
                    path="/Home/QualityPolicy"
                    exact
                    Component={QualityPolicy}
                  />
                  <Route path="/Home/Contact" exact Component={Contact} />
                  <Route path="/cart" exact Component={Cart} />
                  <Route
                    path="Home/Categories/Confectionery"
                    exact
                    Component={Confectionery}
                  />
                  <Route
                    path="Home/category/PageBread"
                    exact
                    Component={Bread}
                  />
                </Routes>

                <Footer />
             
            </AllClickedProdut.Provider>
          </AllWishlistProduct.Provider>
        </Router>
      </div>
    </>
  );
}

export default App;
