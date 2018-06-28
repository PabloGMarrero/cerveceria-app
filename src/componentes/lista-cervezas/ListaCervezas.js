import React, { Component } from 'react'
import {CervezaDetalle} from '../cerveza-detalle/CervezaDetalle'

export class ListaCervezas extends Component {

    render() {
        return (
            this.props.cervezas.map(cerveza =>
                <CervezaDetalle cerveza={cerveza} key={cerveza.titulo}/>
            )
        )
    }

}