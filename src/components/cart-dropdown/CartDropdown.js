import React from 'react'
import './cart-dropdown.scss'
import CustomButton from '../custom-button/CustomButton'
import { connect } from 'react-redux'
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'


const CartDropdown = ({ cartItems }) => {
  console.log("liuwehfjnmfbasd", cartItems)
  return (
    <div className='cart-dropdown'>
      <div className="cart-items">
        {
          cartItems.map(item => (
            <CartItem item={item} key={item.id}/>
          ))
        }
      </div>
      <CustomButton>
        Go to Checkout
      </CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown)
