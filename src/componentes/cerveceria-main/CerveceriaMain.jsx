import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button'
import { BusquezaCerveza } from './../busqueda-cerveza/busquedaCerveza';
import './CerveceriaMain.css'

export class CerveceriaMain extends Component {

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
                    <BusquezaCerveza />
                    <Button onClick={()=>this.props.history.push('/compra')}>Comprar</Button>
                </div>
            </div>
        )
    }
}



