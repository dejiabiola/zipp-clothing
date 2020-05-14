import React from 'react'
import './cart-icon.scss'
import { connect } from 'react-redux'
import { ReactComponent as ShoppingIcon } from '../../assets/original.svg'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { selectCartItemCount } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'


const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
