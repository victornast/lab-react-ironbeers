import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import AllBeers from './views/AllBeers';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/beers" component={AllBeers} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
