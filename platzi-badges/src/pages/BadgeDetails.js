import React from 'react'

import Badge from '../components/Badge'
import { Link } from 'react-router-dom'

import "./styles/BadgeDetails.css"
import confLogo from '../images/platziconf-logo.svg'

function BadgeDetails(props) {
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>{props.badge.firstName} {props.badge.lastName}</h1>
            </div>
          </div>
        </div>
      </div>
    
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={props.badge.firstName}
              lastName={props.badge.lastName}
              email={props.badge.email}
              twitter={props.badge.twitter}
              jobTitle={props.badge.jobTitle}
            />
          </div>
          <div className="col">
            <h2>Action</h2>
            <div>
              <div>
                <Link to={`/badges/${props.badge.id}/edit`} className="btn btn-primary mb-4">Edit</Link>
              </div>
              <div>
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BadgeDetails