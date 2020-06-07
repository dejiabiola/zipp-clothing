import React, { useEffect } from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop-page/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import { connect } from 'react-redux';
import { selectCurrentuser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect'
import Checkout from './pages/checkout/Checkout'
import PropTypes from 'prop-types'
import { checkUserSessions } from './redux/user/user.action';


const App = ({ checkUserSessions, currentUser }) => {


  useEffect(() => {
    checkUserSessions()
  }, [checkUserSessions])


  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
        <Route path='/checkout' component={Checkout} /> 
      </Switch>
    </div>
  );
}

App.propTypes = {
  currentUser: PropTypes.object,
  checkUserSessions: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser,
});

const mapDisPatchToProps = (dispatch) => {
  return {
    checkUserSessions: () => dispatch(checkUserSessions())
  }
}


export default connect(mapStateToProps, mapDisPatchToProps)(App);
