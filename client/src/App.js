import React, { useEffect, lazy, Suspense } from 'react';
import { GlobalStyle } from './global.styles'
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentuser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import { checkUserSessions } from './redux/user/user.action';
import Header from './components/header/Header';
import Loader from './components/loader/Loader';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./pages/homepage/Homepage'))
const ShopPage = lazy(() => import('./pages/shop-page/ShopPage'))
const SignInAndSignUp = lazy(() => import('./pages/sign-in-and-sign-up/SignInAndSignUp'))
const Checkout = lazy(() => import('./pages/checkout/Checkout'))

const App = ({ checkUserSessions, currentUser }) => {


  useEffect(() => {
    checkUserSessions()
  }, [checkUserSessions])


  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
            <Route path='/checkout' component={Checkout} />
          </Suspense>
        </ErrorBoundary>
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
