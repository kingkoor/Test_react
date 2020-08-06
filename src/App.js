import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import HatPage from './components/hats.component';


function App() {
  return (<div>
    {/* <HomePage/> */}
    <Switch>
      <Route exact={true} path='/' component={HomePage} />
      <Route exact={true} path='/hats' component={HatPage} />
      <Route path='/shop' component={ShopPage} />
    </Switch>

  </div>
  )

}

export default App;
