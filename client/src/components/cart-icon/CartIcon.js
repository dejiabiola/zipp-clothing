import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { selectCartItemCount } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { CartIconContainer, StyledShoppingIcon, ItemCountStyled } from './cart-icon.styles'


const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartIconContainer  onClick={toggleCartHidden}>
      <StyledShoppingIcon />
      <ItemCountStyled>{itemCount}</ItemCountStyled>
    </CartIconContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
