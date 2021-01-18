import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './Pages/Homepage.component';
import ShopPage from './Pages/shop/shop.component';
import SignInSignUp from './Pages/signin-and-signup/signin-and-signup.component';
import Header from './Components/header/header.component';

import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
} 

export default App;
