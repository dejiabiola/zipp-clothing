import React from 'react';
import './checkout-item.scss'
import { connect } from 'react-redux';

const CheckoutItem = ({ cartItem: { imageUrl, name, quantity, price } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt={name} />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">${price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
)


const mapStateToProps = ({ cart }) => ({
  
})

export default connect(mapStateToProps)(CheckoutItem)