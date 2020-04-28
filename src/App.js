import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './Home';
import Character from './Character';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' >
          <Home />
        </Route>

        <Route exact path='/:name'>
        <Character />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
