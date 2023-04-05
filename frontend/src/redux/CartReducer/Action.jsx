import {
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  DELETE_CART_SUCCESS,
  POST_CART_SUCCESS,
  INCREASE_CART_QUANTITY
} from './ActionType'
import axios from 'axios'

export const getCartProductsRequestAction = () => {
  return { type: GET_CART_REQUEST }
}

export const getCartProductsSuccessAction = (payload) => {
  return { type: GET_CART_SUCCESS, payload }
}

export const getCartProductsFailureAction = () => {
  return { type: GET_CART_FAILURE }
}

export const postCartProductsSuccessAction = (payload) => {
  return { type: POST_CART_SUCCESS, payload }
}

export const DeleteCartSuccess = () => {
  return { type: DELETE_CART_SUCCESS }
}












export const getCartProducts = () => async (dispatch) => {
  console.log('token', localStorage.getItem('user_token'))
  dispatch(getCartProductsRequestAction())
  return axios
    .get('https://dark-erin-fox-cuff.cyclic.app/cart/getitem', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('user_token'),
      },
    })
    .then((res) => {
      console.log('res', res)
      dispatch(getCartProductsSuccessAction(res.data))
    })
    .catch((err) => {
      console.log('err', err)
      dispatch(getCartProductsFailureAction())
    })
}

export const deleteCartdata = (id) => async (dispatch) => {
  dispatch(getCartProductsRequestAction())
  return axios
    .delete(`https://dark-erin-fox-cuff.cyclic.app/cart/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('user_token'),
      },
    })
    .then((res) => {
      dispatch(DeleteCartSuccess())
    })
    .catch((err) => {
      dispatch(getCartProductsFailureAction())
    })
}

export const addCartData = (payload) => async (dispatch) => {
  dispatch(getCartProductsRequestAction())
  console.log(payload)
  
  console.log('here', localStorage.getItem('user_token'))
  let res = await fetch(`https://dark-erin-fox-cuff.cyclic.app/cart/add`, {
    method: `POST`,
    headers: {
      Authorization: localStorage.getItem('user_token'),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  let data = await res.json()

  console.log(data)
}
