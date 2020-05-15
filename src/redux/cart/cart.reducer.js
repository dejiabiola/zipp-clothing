import { TOGGLE_CART_HIDDEN, ADD_CART_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } from "./cart.action"
import { addItemToCart, removeItemFromCart } from "./cart.utils"


const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

export default function cartReducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case ADD_CART_ITEM: 
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.item)
      }
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.item.id)
      }
    case REMOVE_ITEM: 
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.item)
      }
    default:
      return state
  }
}