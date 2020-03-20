import React from 'react'

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Hector"
                lastName="Torres"
                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                jobTitle="Developer"
                twitter="HectorFranc0"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew