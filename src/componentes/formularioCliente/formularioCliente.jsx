import React, { Component } from 'react'
import Cerveza from '../../domain/cerveza.js'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import FormHelperText from '@material-ui/core/FormHelperText'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MaskedInput from 'react-text-mask';


import Cliente from '../../domain/cliente'

import './FormularioCliente.css'


function PhoneMask(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={inputRef}
            mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

export class FormularioCliente extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cliente: new Cliente("", "", "", 0)
        }
    }

    handleChange = name => event => {
        const cliente = this.state.cliente
        cliente[name] = event.target.value,
            this.setState({
                cliente: cliente
            });
    };



    render() {
        return (
            <div>
                <div className="formulario-cliente">
                    <Grid item xs={12} sm={6} justify="center">
                        <div className="fondo-formulario">
                            <br></br>
                            <div>
                                Cliente
                            </div>
                            <div>
                                <TextField
                                    defaultValue=""
                                    label="Nombre"
                                    value={this.state.cliente.nombre}
                                    id="nombre-input"
                                    onChange={this.handleChange('nombre')}
                                />
                                <TextField
                                    defaultValue=""
                                    label="Apellido"
                                    value={this.state.cliente.apellido}
                                    id="apellido-input"
                                    onChange={this.handleChange('apellido')}
                                />
                                <InputLabel htmlFor="formatted-text-mask-input"></InputLabel>
                                <Input
                                    value={this.state.cliente.telefono}
                                    onChange={this.handleChange('telefono')}
                                    id="formatted-text-mask-input"
                                    inputComponent={PhoneMask}
                                />
                            </div>
                            <br></br>
                            <div>
                                Domicilio
                        </div>
                            <div>
                                <TextField
                                    defaultValue=""
                                    label="Calle"
                                    value={this.state.cliente.calle}
                                    id="domicilio-input"
                                    onChange={this.handleChange('calle')}
                                />
                                <TextField
                                    defaultValue=""
                                    label="Numero"
                                    id="numero-input"
                                    value={this.state.cliente.numero}
                                    onChange={this.handleChange('numero')}
                                />
                            </div>

                        </div>
                    </Grid>
                </div>
            </div>
        )
    }

}
