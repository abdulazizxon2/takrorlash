import {createStore}from"redux"
import rootReducer from "./Reducer/Index";
const Store = createStore(rootReducer);
export default Store;