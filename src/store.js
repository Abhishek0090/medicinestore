import { createStore } from "redux";
import RootReducers from "./reduxstore/actions/reducers/RootReducers";

const store = createStore(RootReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState())

export default store;