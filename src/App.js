import "./App.css";
import Navbar from "./components/Navbar";
import Medicines from "./components/Medicines";
import SlickDemo from "./components/Carousel/SlickDemo";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import MyOrders from "./components/MyOrders";
import MedicineInfo from "./components/MedicineInfo/MedicineInfo";
import Cart from "./components/shoppingcart/Cart";
import CartItem from "./components/shoppingcart/CartItem";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
      {/* <SlickDemo/> */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/orders" element={<MyOrders/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
        <Route exact path="/medicines" element={<MedicineInfo/>}/>
        <Route exact path = "/cart" element={<CartItem/>}/>
        {/* <Route exact path="/orders">
          
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route> */}
      </Routes>
      </div>
      {/* <footer className="footer">
        Copyright © 2021 
      </footer> */}
    </>
  );
}

export default App;
