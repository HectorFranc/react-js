import React from 'react'

import './styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg'
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge'
import PageLoading from '../components/PageLoading'

import api from '../api'

class BadgeNew extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      error: null,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  async handleSubmit(e) {
    e.preventDefault()

    this.setState({
      loading: true,
      error: null
    })

    try {
      await api.badges.create(this.state.form)
      this.setState({ loading: false })

      this.props.history.push('/badges')
    } catch (error) {
      this.setState({
        loading: false,
        error
      })
    } 
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />
    }
    return (
      <>
        <div className="BadgeNew__hero-image BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                twitter={this.state.form.twitter || 'TWITTER'}
                email={this.state.form.email || 'EMAIL'}
              />
            </div>
            <div className="col-6">
              <h1>New Attendant</h1>
              <BadgeForm
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default BadgeNew