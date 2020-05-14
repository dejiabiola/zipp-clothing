import React from 'react'
import './cart-icon.scss'
import { connect } from 'react-redux'
import { ReactComponent as ShoppingIcon } from '../../assets/original.svg'
import { toggleCartHidden } from '../../redux/cart/cart.action'

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>45</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)
