import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop-page/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'


class App extends Component {
  state = {
    currentUser: null
  }

  unSubscribeFromAuth = null

  componentDidMount() {
    // get the authuser object from firebase and assing it to unsubscribe variable which will be used to close the connection
    // when the component unmounts
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async authUser => {

      if (authUser) {
        const userRef = await createUserProfileDocument(authUser)
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        this.setState({
          currentUser: authUser
        })
      }
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
