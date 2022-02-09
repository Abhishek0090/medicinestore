import React from "react";
import { useState } from "react";
import "../App.css";
import "./navbarcss/Navbarcss.css";
import SlickDemo1 from "./Carousel/SlickDemo1";

import { useSelector } from "react-redux";
import Medicines from "./Medicines";

const SearchBar = () => {
  const item = useSelector((state) => state.getProducts.item);
  const [search, setSearch] = useState("");
  const handlefilter = (e) => {
    const data = e.target.value;
    setSearch(data);
  };

  const filtereddata = item.filter((val) => {
    if (search.length < 0) {
      return val;
    } else {
      return val.name?.toLowerCase().includes(search);
    }
  });
  return (
    <>
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
        <button id="search-button" type="button" class="searchbtn">
        <img src="./assets/search.png" className="searchicon" alt="" />
        </button>
      </div>
      {search.length === 0 ? <SlickDemo1 /> : <span />}
      <div className="itemalign"> 
        {filtereddata.map((val, key) => {
          return <Medicines key={val.id} {...val} />;
        })}
      </div>
      <hr/>
      
    </>
  );
};

export default SearchBar;
