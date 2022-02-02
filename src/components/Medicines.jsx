import React, { useEffect, useState } from "react";
import '../App.css';

const Medicines = ({id,name,price,description,tag,img} ) => {

  const [search, setSearch] = useState(null)

  return (
    <div>
      <div className="card " style={{ width: "15rem" }}>
        <a href="/medicines">
        <img src={img}  className="card-img-top img-style" alt="..."/>
        </a>
        <div className="card-body">
          <h5 className="card-title fw-bold">{name}</h5>
         
          <h6 className="card-title fst-italic">MRP :₹{" "}{price}</h6>
          {/* <div className="btn-med">
          <a href="#" className="btn btn-success" onClick={()=>console.log("Buy now")}>
            Buy
          </a>
          <a href="#" className="btn1 btn-warning">
            Add to Cart          
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Medicines;
