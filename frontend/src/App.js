import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Navbar, NavItem } from 'react-materialize'
import './App.css';
import Home from './components/Home'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar>
            <NavItem href="/">Home</NavItem>
          </Navbar>
          <Route path="/" exact component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
