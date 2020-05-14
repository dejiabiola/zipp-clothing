import React from 'react'
import './cart-dropdown.scss'
import CustomButton from '../custom-button/CustomButton'
import { connect } from 'react-redux'
import CartItem from '../cart-item/CartItem'

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

const mapStateToProps = ({cart: {cartItems}}) => ({
  cartItems
})

export default connect(mapStateToProps)(CartDropdown)
