import { Medicineapi } from "../../../components/Context/Medicineapi";

const initialState = {
    item : Medicineapi,
    totalAmount : 0,
    totalItem : 0,
  }

//   useEffect(() => {
//     dispatch({type:"GET_TOTAL"})
//   }, [initialState.item])
  
  const Reducers = (state=initialState,action)=>{

    if(action.type === "REMOVE_ITEM"){
        return{
            ...state,
            item : state.item.filter((element)=>{
                   return element.id != action.payload; 
            })
        }
    }
    if(action.type === "CLEAR_CART"){
    return{
        ...state,
        item : []
    }
    }
    if(action.type === "INC_ITEM"){
        let updateCart = state.item.map((e)=>{
            if(e.id === action.payload ){
                 return{...e,amount:e.amount + 1}   
            }
            return e
        })
        return {
            ...state,
            item : updateCart
        }
    }

    if(action.type === "DEC_ITEM"){
        let decCart = state.item.map((curE)=>{
            if(curE.id === action.payload){
                return{
                    ...curE,
                    amount:curE.amount - 1
                }
            }
            return curE
        })
       return{
           ...state,
           item: decCart
       }
    }
    if(action.type === "GET_TOTAL"){
        let {totalItem,totalAmount} = state.item.reduce((accum,curVal)=>{
            let {amount,price} = curVal;
            let updatedTotalAmount = price * amount;
            accum.totalItem += amount;
            accum.totalAmount += updatedTotalAmount;
            return accum;
        },  {
            totalItem: 0    ,
            totalAmount:0
        });
        return {...state,totalItem,totalAmount};
    }
    return state;
}

export default Reducers;