import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar";
// import { Medicineapi } from '../Context/medicineapi'
// import MedicineContext from '../Context/MedicineContext'
import "./info.css";


const MedicineInfo = ({id,description,name,img}) => {
  // const context = useContext(MedicineContext)


  return (
    <>
      <div className="infoSection">
        <div class="card mb-3 mx-12" style={{width: "1540px"}}>
          <div class="row g-0">
            <div class="col-md-3">
              <img src={img} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title d-flex ">{name}</h5>
                <p class="card-text">
                  {description}
                </p>
                <button className="btn d-flex flex-column btn-primary">
                  buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicineInfo;
