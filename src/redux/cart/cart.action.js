// Cart Types
export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN'
export const ADD_CART_ITEM = 'ADD_CART_ITEM'






// Cart Actions
export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
})

export const addItemToCart = (item) => ({
  type: ADD_CART_ITEM,
  item
})