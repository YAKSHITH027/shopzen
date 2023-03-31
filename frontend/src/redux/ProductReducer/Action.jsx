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
    axios.get("http://localhost:8080/product",params).then((res)=>{
        dispatch(getProductSuccess(res.data));
        // console.log(res.data);
    }).catch(()=>{
        dispatch(productFailure());
    })
}