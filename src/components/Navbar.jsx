import React from "react";
import "./navbarcss/Navbarcss.css";
import { useState } from "react";
import "../App.css";
import SlickDemo1 from "./Carousel/SlickDemo1";

import { useContext } from "react";
import { useSelector } from "react-redux";
import Medicines from "./Medicines";

const Navbar = () => {
  const empty = null
  const item = useSelector((state) => state.getProducts.item);
  const [filterdata, setFilterData] = useState([]);
  const [search, setSearch] = useState("");
  const handlefilter = (e) => {
    const data = e.target.value;
    setSearch(data);
  };

  const filtereddata = item.filter((val)=>{
    if(search.length<0){
      return val;
    }else{
      return val.name?.toLowerCase().includes(search)
    }
  })

  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-sm navbar-light bg-light  navbar-fixed-top  nav nav-tabs card-header-tabs navcss"
          role="navigation"
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="/">
                {" "}
                <img
                  src="assets/logo1.png"
                  alt="logo"
                  height={"50%"}
                  width={"100px"}
                />
              </a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/orders">
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/help">
                    Help
                  </a>
                </li>
              </ul>
              <div class="centerSearch d-flex ">
                <div className="form-outline">
                  <input
                    id="searchInput"
                    type="search"
                    id="form1"
                    value={search}
                    onChange={handlefilter}
                    placeholder=" Search for Medicine"
                    class="form-control"
                  />
                </div>
               
                  <button
                    id="search-button"
                    type="button"
                    class="btn btn-success"
                  >
                    <i class="fas fa-search"></i>
                  </button>
           
              </div>
              <div className="cart-icon">
                <a href="/cart">
                  <img
                    src="./assets/carticon.png"
                    alt="cart"
                    className="cartIcon"
                  />
                </a>
              </div>
              <div className="validation">
                <div className="login">
                  <a href="/login">
                    <button
                      ton
                      className="btn btn-outline-success"
                      type="submit"
                    >
                      Log in
                    </button>
                  </a>
                </div>
                <div className="signup">
                  <a href="/signup">
                    <button
                      className="btn btn-outline-success signupbtn"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </a>
                </div>
              </div>
              <div className="user">
                <a href="/user">
                  <img src="./assets/user.png" className="userIcon" alt="" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
     {search.length===0?<SlickDemo1/>:<span/>}
        <div className="itemalign">
          {filtereddata.map((val, key) => {
            return <Medicines key={val.id} {...val} />;
          })}
        </div>
  
    </>
  );
};

export default Navbar;
