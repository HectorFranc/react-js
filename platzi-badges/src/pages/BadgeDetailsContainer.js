import React, { Component } from 'react'

import BadgeDetails from './BadgeDetails'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

import api from '../api'

class BadgeDetailsContainer extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      loading: true,
      error: null,
      data: undefined,
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  async fetchData() {
    this.setState({
      loading: true,
      error: null,
    })

    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      )
      this.setState({
        loading: false,
        data,
      })
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

    if (this.state.error) {
      return <PageError error={this.state.error.message} />
    }

    return <BadgeDetails badge={this.state.data} />
  }
}

export default BadgeDetailsContainer