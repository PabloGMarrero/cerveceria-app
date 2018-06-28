import React, { Component } from 'react'
import {CervezaDetalle} from '../cerveza-detalle/CervezaDetalle'
import './ListaCervezas.css'

export class ListaCervezas extends Component {

    render() {
        return (
            this.props.cervezas.map(cerveza =>
                <CervezaDetalle cerveza={cerveza} key={cerveza.titulo}/>
            )
        )
    }

}