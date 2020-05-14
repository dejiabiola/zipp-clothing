import React from 'react'
import './cart-icon.scss'
import { connect } from 'react-redux'
import { ReactComponent as ShoppingIcon } from '../../assets/original.svg'
import { toggleCartHidden } from '../../redux/cart/cart.action'

const CartIcon = ({ toggleCartHidden, cartTotal }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartTotal}</span>
    </div>
  )
}

const mapStateToProps = ({ cart }) => ({
  cartTotal: cart.cartItems.length
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
