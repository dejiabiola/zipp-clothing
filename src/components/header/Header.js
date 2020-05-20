import React from 'react'
import { ReactComponent as Logo} from '../../assets/header-logo.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import { selectCurrentuser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { HeaderContainer, OptionLink, OptionsContainer, LogoContainer } from './header.styles'

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/' className='logo-container'>
        <Logo className='logo' />
      </LogoContainer> 
      <OptionsContainer>
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>
        <OptionLink to='/shop'>
          CONTACT
        </OptionLink>
        {
          currentUser
          ? <OptionLink as='div' className='option' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
          : <OptionLink className='option' to='/signin'>SIGN IN</OptionLink>
        }
        {currentUser && <CartIcon  />}
        
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </HeaderContainer>
  )
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser,
  hidden: selectCartHidden
})



export default connect(mapStateToProps)(Header)
