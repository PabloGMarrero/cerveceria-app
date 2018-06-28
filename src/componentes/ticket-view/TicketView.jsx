import React, { Component } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import './TicketView.css'

import { CervezaComprada } from '../cerveza-comprada/CervezaComprada'

export class TicketView extends Component {

    constructor(props) {
        super(props),
            this.state = {
                total: 500
            }
    }

    calcularPrecioTotal = () =>  this.setState({total: 500})

    render() {
        return (
            <div className="main-ticket-view">
                <CervezaComprada />
                <div className="importe-total">
                    <h2>Total</h2><InputLabel htmlFor="total"> {this.state.total} </InputLabel>
                </div>
                

                <h1>Aca va el formulario</h1>
            </div>
        )
    }
}