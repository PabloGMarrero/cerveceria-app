import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import { CervezaRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <CervezaRoutes/>
      </BrowserRouter>
    );
  }
}

export default App;
