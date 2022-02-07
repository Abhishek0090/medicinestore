import React from "react";
import { useSelector } from "react-redux";
import MedicineInfo from "./MedicineInfo";

const medicinePassing = () => {
    const item = useSelector(state=>state.getProducts.item);
    
  return (
    <>
    <div>
      {
        item.map((ele,index)=>{
          return <MedicineInfo key={ele.id} {...ele}/>
        })
      }
    </div>
    </>
  );
};

export default medicinePassing;
