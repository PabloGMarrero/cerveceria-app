import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import { CervezaRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { BusquezaCerveza } from './componentes/busqueda-cerveza/busquedaCerveza';

import { FormularioCliente } from './componentes/formularioCliente/formularioCliente';

class App extends Component {
  render() {
    return (

      <div>
        <div className="main-cerveza">
          <AppBar position="static">
            <Toolbar>
              <IconButton className="" color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={"cerveceria-title"}>
                La Cerveceria Piola
                  </Typography>
            </Toolbar>
          </AppBar>
          <BrowserRouter>
            <FormularioCliente />
          </BrowserRouter>
        </div>
      </div>

    );
  }
}

export default App;
