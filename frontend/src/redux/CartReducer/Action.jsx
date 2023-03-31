import { GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, DELETE_CART_SUCCESS } from "./ActionType";
import axios from "axios"

export const getCartProductsRequestAction = () => {
    return { type: GET_CART_REQUEST };
};

export const getCartProductsSuccessAction = (payload) => {
    return { type: GET_CART_SUCCESS, payload };
};

export const getCartProductsFailureAction = () => {
    return { type: GET_CART_FAILURE };
};



export const DeleteCartSuccess = () => {
    return { type: DELETE_CART_SUCCESS };
};




export const getCartProducts = () => (dispatch) => {
    dispatch(getCartProductsRequestAction());
    return axios
        .get("http://localhost:7000/cart/getitem")
        .then((res) => {
            dispatch(getCartProductsSuccessAction(res.data));
        })
        .catch((err) => {
            dispatch(getCartProductsFailureAction());
        });
};



export const deleteCartdata = (id) => (dispatch) => {
    dispatch(getCartProductsRequestAction());
    return axios
        .delete(`http://localhost:7000/cart/${id}`)
        .then((res) => {
            dispatch(DeleteCartSuccess());
        })
        .catch((err) => {
            dispatch(getCartProductsFailureAction());
        });
}


