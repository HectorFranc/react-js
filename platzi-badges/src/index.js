import React from 'react'
import ReactDOM from 'react-dom'

// const element = <h1>Hello, Platzi Badges</h1>
// const element = React.createElement('h1', {}, 'Hello, Platzi Badges')
const aFunction = () => 'world'
const element = <h1>Hello, {aFunction()}</h1>

const container = document.getElementById('app')

// ReactDOM.render(__que__, __donde__)
ReactDOM.render(element, container)
