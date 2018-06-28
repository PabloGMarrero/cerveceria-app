//como regla general esta linea tiene que IR siempre
//o casi siempre, component puede no ir
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import './CervezaDetalle.css'
//import Cerveza from '../../domain/Cerveza'

export class CervezaDetalle extends Component {

    render() {
        return (
            <div className="detalle-cerveza" >
                <Grid item xs={12} sm={6} >
                    <Card >
                        <CardContent  >
                            <Grid container spacing={12} justify="center">
                                <Grid item xs={6} sm={3}>
                                    <img className="cervezaImagen" src={'../../assets/' + this.props.cerveza.nombreImagen} alt="cervezaI" />
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <h3>
                                        {this.props.cerveza.titulo}
                                    </h3>
                                    <p>
                                        {this.props.cerveza.descripcion}
                                    </p>
                                    <p>
                                        <strong>Geaduacion Alcholica:</strong>
                                        <br></br>
                                        {this.props.cerveza.graduacion} %
                                </p>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        )
    }
}
