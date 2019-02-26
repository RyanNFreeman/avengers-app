import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import avengers from './data'

import Home from './components/Home'
import AvengersList from './components/AvengersList'
import AvengerPage from './components/AvengerPage'


import './App.css';

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      avengers: avengers
    }
    
  }
  render() {
    return (
      <div className="App">
        <ul className='navbar'>
          <li>
            <Link to='/'>Home</Link>
            <Link to='/avengers'>Avengers</Link>

          </li>
        </ul>
        <Route exact path='/' component={Home} />
        <Route exact path='/avengers' component={AvengersList} />
        <Route path='/avengers/:id' component={AvengerPage} />

      </div>
    );
  }
}

export default App;
