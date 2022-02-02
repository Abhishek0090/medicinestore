import MedicineContext from './MedicineContext'
import React, { useState ,useEffect, createContext , useReducer} from "react";
import './cart.css'
import { reducer } from "./reducer";
import { Medicineapi } from './Medicineapi';
import Home from '../Home';

const initialState = {
  item : Medicineapi,
  totalAmount : 0,
  totalItem : 0,
}

const MedicineState = (prop) => {


  const [state, dispatch] = useReducer(reducer, initialState)

  //for deleting the individual items from an item cart
  const removeItem = (id)=>{
      return dispatch({
        type: "REMOVE_ITEM",
        payload : id,
      })
  }

  //clear the cart
  const clearCart = ()=>{
    return dispatch({
      type : "CLEAR_CART"
    })
  }

  const increment = (id)=>{
    return dispatch({
      type : "INC_ITEM",
      payload : id
    })
  }

  const decrement = (id)=>{
    return dispatch({
      type : "DEC_ITEM",
      payload : id
    })
  }
    return(
        <>
        <MedicineContext.Provider value={{...state ,removeItem,clearCart,increment,decrement}}>
            {props.children}
        </MedicineContext.Provider>
        </>
    );
};

export default MedicineState;
