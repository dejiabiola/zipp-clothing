import React from 'react'
import { CartItemContainer, CartItemImage, ItemDetailContainer, NameSpan, PriceSpan } from './cart-item.styles'

const cartItem = ({ item: { imageUrl, price, name, quantity }}) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name} />
      <ItemDetailContainer>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>{quantity} x ${price}</PriceSpan>
      </ItemDetailContainer>
    </CartItemContainer>
  )
}

export default cartItem
