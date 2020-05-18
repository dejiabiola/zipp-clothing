import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton = ({ price }) => {
  // ! stipe will only process price in cents
  const priceForStripe = price * 100
  const publichableKey = 'pk_test_vljr5iUEs5fZ1V9yXssDNwvA00chWTCvw7'

  const onToken = (token) => {
    console.log(token)
    alert('payment successful')
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

export default StripeCheckoutButton
