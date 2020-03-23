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
      modalIsOpen: false,
    }
    
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleDeleteBadge = this.handleDeleteBadge.bind(this)
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

  handleOpenModal() {
    this.setState({ modalIsOpen:true })
  }

  handleCloseModal() {
    this.setState({ modalIsOpen:false })
  }

  async handleDeleteBadge() {
    this.setState({
      loading: true,
      error: null,
    })

    try {
      await api.badges.remove(
        this.props.match.params.badgeId
      )

      this.setState({ loading:false })
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

    if (this.state.error) {
      return <PageError error={this.state.error.message} />
    }

    return <BadgeDetails
      badge={this.state.data}
      onCloseModal={this.handleCloseModal}
      onOpenModal={this.handleOpenModal}
      modalIsOpen={this.state.modalIsOpen}
      onDeleteBadge={this.handleDeleteBadge}
    />
  }
}

export default BadgeDetailsContainer