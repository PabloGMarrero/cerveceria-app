import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import './CompraCerveza.css'

export class CompraCerveza extends Component {

    render() {
        return (
            <div className="compra-cerveza" >
                <h1>Compra</h1>
                <Button onClick={()=>this.props.history.push('/')}>Volverrrr</Button>
            </div>
        )
    }
}
