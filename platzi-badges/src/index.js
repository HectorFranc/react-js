import React from 'react'
import ReactDOM from 'react-dom'

import Badge from './components/Badge'

// const element = <h1>Hello, Platzi Badges</h1>
// const element = React.createElement('h1', {}, 'Hello, Platzi Badges')

const container = document.getElementById('app')

// ReactDOM.render(__que__, __donde__)
ReactDOM.render(<Badge />, container)
