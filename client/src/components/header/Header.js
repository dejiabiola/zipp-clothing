import React from 'react'
import { ReactComponent as Logo} from '../../assets/header-logo.svg'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import { selectCurrentuser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { HeaderContainer, OptionLink, OptionsContainer, LogoContainer } from './header.styles'
import { signOutStart } from '../../redux/user/user.action'

const Header = (props) => {
  const { signOutStart, currentUser, hidden } = props
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
          ? <OptionLink as='div' className='option' onClick={signOutStart}>SIGN OUT</OptionLink>
          : <OptionLink className='option' to='/signin'>SIGN IN</OptionLink>
        }
        {currentUser && <CartIcon  />}
        
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </HeaderContainer>
  )
}

Header.propTypes = {
  signOutStart: PropTypes.func.isRequired,
  currentUser: PropTypes.object || PropTypes.null.isRequired,
  hidden: PropTypes.bool.isRequired
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser,
  hidden: selectCartHidden
})

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header)
