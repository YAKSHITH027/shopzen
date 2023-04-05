import {
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  DELETE_CART_SUCCESS,
  POST_CART_SUCCESS,
  CART_UPDATE_QTY,
} from './ActionType'

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CART_REQUEST: {
      return { ...state, isLoading: true }
    }

    case GET_CART_SUCCESS: {
      return { ...state, isLoading: false, products: payload }
    }

    case GET_CART_FAILURE: {
      return { ...state, isError: true, isLoading: false }
    }

    case DELETE_CART_SUCCESS: {
      return { ...state, isLoading: false }
    }

    case POST_CART_SUCCESS: {
      return { ...state, isLoading: false }
    }
    case CART_UPDATE_QTY: {
      console.log('insidereducers', payload)
      return {
        ...state,
        products: state.products.map((item) => {
          console.log(item, payload)
          if (item._id == payload.id) {
            return { ...item, quantity: payload.qty }
          } else {
            return item
          }
        }),
      }
    }

    default:
      return state
  }
}
