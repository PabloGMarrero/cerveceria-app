import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent'
import { CervezaService } from '../../domain/service/CervezaService'
import './CervezaComprada.css'

export class CervezaComprada extends Component {

    constructor(props) {
        super(props),
            this.state = {
                cervezas: new CervezaService().getAll()
            }
    }
    render() {
        return (
            
            this.state.cervezas.map(cerveza =>
                <div className="main-cerveza-comprada-view">
                    <Grid>
                        <CardContent className="cerveza-comprada-view">
                            <Grid container spacing={12} justify="center">
                                <Grid item xs={12} sm={9}>
                                    <h3>{cerveza.titulo}</h3>
                                    <h3>{cerveza.precio}</h3>
                                    <h3>{cerveza.cantidad}</h3>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Grid>
                </div>
            )
        )
    }
}