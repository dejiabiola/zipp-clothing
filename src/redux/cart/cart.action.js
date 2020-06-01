// Cart Types
export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN'
export const ADD_CART_ITEM = 'ADD_CART_ITEM'
export const CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const CLEAR_CART = 'CLEAR_CART'



// Cart Actions
export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
})

export const addItemToCart = (item) => ({
  type: ADD_CART_ITEM,
  item
})

export const clearItemFromCart = (item) => ({
  type: CLEAR_ITEM_FROM_CART,
  item
})

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  item
})

export const clearCart = () => ({
  type: CLEAR_CART
})