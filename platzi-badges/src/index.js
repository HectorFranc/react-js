import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

import './global.css'
import Badge from './components/Badge'

// const element = <h1>Hello, Platzi Badges</h1>
// const element = React.createElement('h1', {}, 'Hello, Platzi Badges')

const container = document.getElementById('app')

// ReactDOM.render(__que__, __donde__)
ReactDOM.render(
  <Badge
    firstName="Hector"
    lastName="Torres"
    avatarUrl="https://www.gravatar.com/avatar?d=identicon"
    jobTitle="Developer"
    twitter="HectorFranc0"
  />, container)
