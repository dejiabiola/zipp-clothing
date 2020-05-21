import React from 'react'
import { connect } from 'react-redux'
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { CartDropdownContainer, CartDropdownButton, EmptyMessageSpan, CartItemsContainer } from './cart-dropdown.styles'


const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {
          cartItems.length ? (
            cartItems.map(item => (
              <CartItem item={item} key={item.id}/>
            ))
          )
          :
          <EmptyMessageSpan>Your cart is empty</EmptyMessageSpan>
        }
      </CartItemsContainer> 
      <CartDropdownButton
        onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())  
      }}>
        Go to Checkout
      </CartDropdownButton>
    </CartDropdownContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
