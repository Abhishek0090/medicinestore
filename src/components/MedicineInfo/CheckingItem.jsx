import React from "react";
import { useSelector } from "react-redux";
import MedicineInfo from "./MedicineInfo";

const medicinePassing = () => {
    const item = useSelector(state=>state.Reducer.item);
    
  return (
    <>
      {
        item.map((ele,index)=>{
          return <MedicineInfo key={ele.id} {...ele}/>
        })
      }
    </>
  );
};

export default medicinePassing;
