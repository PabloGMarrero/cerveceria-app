import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import {ContadorCerveza} from '../contador/ContadorCerveza'
import './CervezaDetalle.css'

export class CervezaDetalle extends Component {

    render() {
        return (
            <div className="detalle-cerveza" >
                <Grid item xs={12} sm={6} >
                    {/* <Card className="bla3"> */}
                        <CardContent className="bla2" >
                            <Grid className="bla" container spacing={12} justify="center">
                                <Grid item xs={6} sm={3}>
                                    <img className="cervezaImagen" src={'./../../assets/' + this.props.cerveza.nombreImagen } alt={this.props.cerveza.nombreImagen} />
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <h3>
                                        {this.props.cerveza.titulo}
                                    </h3>
                                    <p>
                                        {this.props.cerveza.descripcion}
                                    </p>
                                    <p>

                                        <strong>Graduación Alcholica:</strong>
                                        <br></br>
                                        {this.props.cerveza.graduacion} %
                                    </p>
                                    <p>
                                        <strong>Precio: </strong>
                                        $ {this.props.cerveza.precio}
                                    </p>
                                    <p>
                                        <strong>Cantidad: </strong>

                                        <ContadorCerveza fcontador={(contador)=>{ this.props.cerveza.cantidad=contador} }/>
                                        {JSON.stringify(this.props.cerveza)}
                                    </p>
                                </Grid>
                            </Grid>
                        </CardContent>
                    {/* </Card> */}
                </Grid>
                <br></br>
            </div>
        )
    }
}
