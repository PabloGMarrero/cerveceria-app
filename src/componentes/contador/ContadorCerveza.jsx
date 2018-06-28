import React, {Component} from 'react'

export class ContadorCerveza extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contador: 0
        }
    }

    cambiarContador(n) {
        this.setState({contador: n})
    }

    restar() {

        this.state.contador > 0 ? this.cambiarContador(this.state.contador - 1) : this.cambiarContador(0)   
        this.props.fcontador(this.cambiarContador(this.state.contador))
    }

    sumar() {
        this.cambiarContador(this.state.contador + 1)
        this.props.fcontador(this.cambiarContador(this.state.contador))
    }

    render() {
        return (
            <div>
                <button onClick={(event) => { this.restar() }}>-</button>
                &nbsp;
                {this.state.contador}
                &nbsp;
                <button onClick={(event) => { this.sumar() }}>+</button>
            </div>
        )
    }
}