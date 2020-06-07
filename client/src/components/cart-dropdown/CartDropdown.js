import React from 'react'
import { connect } from 'react-redux'
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { CartDropdownContainer, CartDropdownButton, EmptyMessageSpan, CartItemsContainer } from './cart-dropdown.styles'
import PropTypes from 'prop-types'



const CartDropdown = ({ cartItems, history, toggleCartHide }) => {
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
        toggleCartHide()  
      }}>
        Go to Checkout
      </CartDropdownButton>
    </CartDropdownContainer>
  )
}

CartDropdown.propTypes = {
  cartItems: PropTypes.array.isRequired,
  history: PropTypes.object,
  toggleCartHide: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

const mapDispatchToProps = (dispatch) => ({
  toggleCartHide: () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown))
