import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo} from '../../assets/header-logo.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link> 
      <div className="options">
        <Link className="option" to='/shop'>
          SHOP
        </Link>
        <Link className="option" to='/shop'>
          CONTACT
        </Link>
        {
          currentUser
          ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
          : <Link className='option' to='/signin'>SIGN IN</Link>
        }
        {currentUser && <CartIcon  />}
        
      </div>
      {!hidden && <CartDropdown />}
    </div>
  )
}

function mapStateToProps({ user: { currentUser }, cart: { hidden } }) {
  return {
    currentUser,
    hidden
  }
}



export default connect(mapStateToProps)(Header)
