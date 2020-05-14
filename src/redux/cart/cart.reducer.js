import { TOGGLE_CART_HIDDEN } from "./cart.action"

const INITIAL_STATE = {
  hidden: true
}

export default function cartReducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state
  }
}