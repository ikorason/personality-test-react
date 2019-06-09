import React, { Component } from 'react'
import Sociotype from './Sociotype'

class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showColorsResult: true,
      showLettersResult: false,
      showBriggsResult: false
    }
    this._onNextClick = this._onNextClick.bind(this)
  }

  renderBriggsResult() {
    return <Sociotype resultBriggs={this.props.resultBriggs} />
  }

  render() {
    let showColorsResult = this.state.showColorsResult
    let showLettersResult = this.state.showLettersResult
    let showBriggsResult = this.state.showBriggsResult
    if (showColorsResult) {
      return this.renderResultColors()
    } else if (showLettersResult) {
      return this.renderResultLetters()
    } else if (showBriggsResult) {
      return this.renderBriggsResult()
    }
  }

  _onNextClick() {
    let showColorsResult = this.state.showColorsResult
    let showLettersResult = this.state.showLettersResult
    let showBriggsResult = this.state.showBriggsResult

    if (showColorsResult) {
      setTimeout(() => {
        this.setState({
          showColorsResult: !showColorsResult, // -> false
          showLettersResult: !showLettersResult // -> true
        })
      }, 800)
    } else if (showLettersResult) {
      setTimeout(() => {
        this.setState({
          showLettersResult: !showLettersResult, // false
          showBriggsResult: !showBriggsResult // true
        })
      }, 800)
    }
  }
}

export default Results
