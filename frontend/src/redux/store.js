import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import{reducer as CartReducer} from "./CartReducer/Reducer";
import {reducer as ProductReducer} from "./ProductReducer/Reducer"


const rootReducer = combineReducers({  
  CartReducer, ProductReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));