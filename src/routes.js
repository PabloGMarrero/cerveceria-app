import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CerveceriaMain } from './componentes/cerveceria-main/CerveceriaMain'
import { CervezaDetalle } from './componentes/cerveza-detalle/CervezaDetalle'
import { CompraCerveza } from './componentes/compra-cerveza/CompraCerveza'

export const CervezaRoutes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={CerveceriaMain} />
            <Route exact path="/detalle" component={CervezaDetalle} />
            <Route exact path="/compra" component={CompraCerveza} />
        </Switch>
    </Router>
)