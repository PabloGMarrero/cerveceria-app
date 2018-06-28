import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import { CervezaRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { TicketView } from './componentes/ticket-view/TicketView'

class App extends Component {
    render() {
      return (
        <BrowserRouter>
          <TicketView/>
          {/* <CervezaRoutes /> */}
        </BrowserRouter>
      );
    }
  }

export default App;
