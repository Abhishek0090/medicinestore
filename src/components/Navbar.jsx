import React from "react";
import "./css/Navbarcss.css";
import { useState } from "react";
import { useContext } from "react";
import MedicineContext from "./Context/MedicineContext";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  // const {totalItem} = useContext(MedicineContext);

const onChange = (e)=>{
  const data = e.target.value
  setSearch(data)
}

  return (
    <div>
      <nav
        className="navbar navbar-expand-sm navbar-light bg-light  navbar-fixed-top"
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
                <a className="nav-link Active" aria-current="page" href="/">
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
            </ul>
            {/* <form className="d-flex centerSearch">
              <input
                className=" searchInput form-control me-8 mx-5"
                type="search"
                placeholder="Search"
                aria-label="Search"
                }
                placeholder="Search for Medicines"
              ></input>
              <button className="btn btn-outline-success" type="submit">
                <i class="fas fa-search"></i>
              </button>
            </form> */}
            <div class="centerSearch d-flex ">
              <div class="form-outline">
                <input
                  id="searchInput"
                  type="search"
                  id="form1"
                  value={search}
                onChange={onChange}
                  placeholder=" Search for Medicine"
                  class="form-control"
                />
              </div>
              <button id="search-button" type="button" class="btn btn-warning">
                <i class="fas fa-search"></i>
              </button>
            </div>
            <div className="signup">
              <div className="cart-icon">
                <a href="/cart">
                  <img
                    src="./assets/carticon.png"
                    alt="cart"
                    className="cartIcon"
                  />
                </a>
                <a href="/login">

                <button  ton className="btn btn-outline-success" type="submit">
                  Log in
                </button>
                </a>
              </div>
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
