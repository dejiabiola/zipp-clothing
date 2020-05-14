import React from 'react'
import './cart-dropdown.scss'
import CustomButton from '../custom-button/CustomButton'
import { connect } from 'react-redux'
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.action'


const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className='cart-dropdown'>
      <div className="cart-items">
        {
          cartItems.length ? (
            cartItems.map(item => (
              <CartItem item={item} key={item.id}/>
            ))
          )
          :
          <span className="empty-message">Your cart is empty</span>
        }
      </div> 
      <CustomButton onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())  
      }}>
        Go to Checkout
      </CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
