import React from 'react'

import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
  render() {
    return <div>
      <div>
        <img src={confLogo} alt="Logo de la conferencia" />
      </div>

      <div>
        <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
        <h1>My <br/> name</h1>
      </div>

      <div>
        <p>Developer</p>
        <p>@sparragus</p>
      </div>

      <div>#platziConf</div>
    </div>
  }
}

export default Badge