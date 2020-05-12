import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop-page/ShopPage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
