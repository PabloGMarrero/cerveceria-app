import React, { Component } from 'react'
import { CervezaService } from '../../domain/service/CervezaService'
import Cerveza from '../../domain/cerveza.js'
import { ListaCervezas } from '../lista-cervezas/ListaCervezas'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import FormHelperText from '@material-ui/core/FormHelperText'

import './busquedaCerveza.css'

export class BusquezaCerveza extends Component {

    constructor(props) {
        super(props)
        this.cervezaService = new CervezaService()
        this.state = {
            cervezaBuscada: new Cerveza("", "", 0, ""),
            cervezas: this.cervezaService.getAll()
        }
    }

    handleChange(property, event) {
        event.preventDefault()
        const search = this.state.cervezaBuscada
        search[property] = event.target.value
        this.setState({
            search: search,
            countries: this.cervezaService.getCerveza(search)
        })
    }

    render() {
        return (
            <div className="main-container-busqueda">
                <div className="busqueda">
                    <FormControl className="formControl">
                        <FormHelperText>Tipo de Cerveza</FormHelperText>
                        <TextField
                            id="cerveza"
                            value={this.state.cervezaBuscada.titulo}
                            onChange={this.handleChange.bind(this, 'titulo')}
                        />
                        <br />
                        <FormHelperText>Graduacion</FormHelperText>
                        <Select
                            id='group'
                            value={this.state.cervezaBuscada.graduacion}
                            onChange={this.handleChange.bind(this, 'graduacion')}
                            inputProps={{
                                name: 'graduacion',
                                id: 'graduacion'
                            }}
                        >
                            <MenuItem value="">
                                <em>Todos</em>  
                            </MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <ListaCervezas cervezas={this.state.cervezas} />
                
            </div>
        )
    }

}