import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import PropTypes from 'prop-types'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  // ! stipe will only process price in cents
  const priceForStripe = price * 100
  const publichableKey = 'pk_test_vljr5iUEs5fZ1V9yXssDNwvA00chWTCvw7'

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
    .then(response => {
      alert("Payment Successful")
    })
    .catch(error => {
      console.log('Payment Error', JSON.parse(error))
      alert("There was a problem with your payment. Please make sure you use the provided credit card")
    })
  }

  return (
    <StripeCheckout 
      amount={priceForStripe}
      label='Pay Now'
      name='Zipp Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}`}
      panelLabel='Pay Now'
      //* Token is the onsuccess callback that triggers when we submit
      token={onToken}
      stripeKey={publichableKey}
    />
  )
}

StripeCheckout.prototypes = {
  price: PropTypes.number.isRequired
}

export default StripeCheckoutButton
