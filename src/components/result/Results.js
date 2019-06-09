import React, { Component } from 'react'
import Sociotype from './Sociotype'

class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSociotypeResult: true
    }
    this._onNextClick = this._onNextClick.bind(this)
  }

  renderSociotypeResult() {
    return <Sociotype resultSociotype={this.props.resultSociotype} />
  }

  render() {
    let showSociotypeResult = this.state.showSociotypeResult
    if (showSociotypeResult) {
      return this.renderSociotypeResult()
    }
  }

  _onNextClick() {
    let showSociotypeResult = this.state.showSociotypeResult
  }
}

export default Results
