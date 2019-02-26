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
    const { avengers } = this.state;
    return (
      <div className="App">
        <ul className='navbar'>
          <li>
            <Link to='/'>Home</Link>
            <Link to='/avengers'>Avengers</Link>

          </li>
        </ul>
        <Route exact path='/' component={Home} />
        <Route exact path='/avengers' render={props => <AvengersList {...props} avengers={avengers}/> } />
    <Route path='/avengers/:id' render={props => <AvengerPage {...props} avengers={avengers} />} />

      </div>
    );
  }
}

export default App;
