import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import AllBeers from './views/AllBeers';
import DetailedBeer from './views/DetailedBeer';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/beers" component={AllBeers} exact />
          <Route path="/beers/:id" component={DetailedBeer} exact />
          <Route path="/random-beer" component={RandomBeer} exact />
          <Route path="/new-beer" component={NewBeer} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
