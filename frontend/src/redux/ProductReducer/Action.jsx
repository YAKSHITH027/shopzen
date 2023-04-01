import axios from "axios";
import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./ActionType";

export const getProductSuccess=(payload)=>{
    return {type:GET_PRODUCT_SUCCESS,payload};
};


export const productRequest=()=>{
    return {type:PRODUCT_REQUEST};
}

export const productFailure=()=>{
    return {type:PRODUCT_FAILURE};
}


export const getProduct=(params)=>(dispatch)=>{
    dispatch(productRequest());
    console.log(params)
    return axios.get("https://dark-erin-fox-cuff.cyclic.app/product",params)
}