import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage';
import { Switch, Route } from 'react-router-dom';


function HatsPage() {
  return <h1>Hats Page Here</h1>
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/:shop' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
