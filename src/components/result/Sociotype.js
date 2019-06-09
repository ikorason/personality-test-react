import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from '../utils/ResultWrapper'
import {
  SLI,
  SEI,
  IEI,
  ILI,
  LSI,
  ESI,
  EII,
  LII,
  SLE,
  SEE,
  IEE,
  ILE,
  LSE,
  ESE,
  EIE,
  LIE
} from '../definitions/Sociotypes'

class Sociotype extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSLI: false,
      showSEI: false,
      showIEI: false,
      showILI: false,
      showLSI: false,
      showESI: false,
      showEII: false,
      showLII: false,
      showSLE: false,
      showSEE: false,
      showIEE: false,
      showILE: false,
      showLSE: false,
      showESE: false,
      showEIE: false,
      showLIE: false
    }
    this.onSLI_click = this.onSLI_click.bind(this)
    this.onSEI_click = this.onSEI_click.bind(this)
    this.onIEI_click = this.onIEI_click.bind(this)
    this.onILI_click = this.onILI_click.bind(this)
    this.onLSI_click = this.onLSI_click.bind(this)
    this.onESI_click = this.onESI_click.bind(this)
    this.onEII_click = this.onEII_click.bind(this)
    this.onLII_click = this.onLII_click.bind(this)
    this.onSLE_click = this.onSLE_click.bind(this)
    this.onSEE_click = this.onSEE_click.bind(this)
    this.onIEE_click = this.onIEE_click.bind(this)
    this.onILE_click = this.onILE_click.bind(this)
    this.onLSE_click = this.onLSE_click.bind(this)
    this.onESE_click = this.onESE_click.bind(this)
    this.onEIE_click = this.onEIE_click.bind(this)
    this.onLIE_click = this.onLIE_click.bind(this)
  }

  renderSLI() {
    return (
      <SLI
        title={'Introvert | Sensing | Logic | Rational'}
        content={``}
        onBackClick={this.onSLI_click}
      />
    )
  }

  renderSEI() {
    return (
      <SEI
        title={'Introvert | Sensing | Ethics | Rational'}
        content={``}
        onBackClick={this.onSEI_click}
      />
    )
  }

  renderIEI() {
    return (
      <IEI
        title={'Introvert | iNtuitive | Ethics | Rational'}
        content={``}
        onBackClick={this.onIEI_click}
      />
    )
  }

  renderILI() {
    return (
      <ILI
        title={'Introvert | iNtuitive | Logic | Rational'}
        content={``}
        onBackClick={this.onILI_click}
      />
    )
  }

  renderLSI() {
    return (
      <LSI
        title={'Introvert | Sensing | Logic | Irrational'}
        content={``}
        onBackClick={this.onLSI_click}
      />
    )
  }

  renderESI() {
    return (
      <ESI
        title={'Introvert | Sensing | Ethics | Irrational'}
        content={``}
        onBackClick={this.onESI_click}
      />
    )
  }

  renderEII() {
    return (
      <EII
        title={'Introvert | iNtuitive | Ethics | Irrational'}
        content={``}
        onBackClick={this.onEII_click}
      />
    )
  }

  renderLII() {
    return (
      <LII
        title={'Introvert | iNtuitive | Logic | Irrational'}
        content={``}
        onBackClick={this.onLII_click}
      />
    )
  }

  renderSLE() {
    return (
      <SLE
        title={'Extravert | Sensing | Logic | Irrational'}
        content={``}
        onBackClick={this.onSLE_click}
      />
    )
  }

  renderSEE() {
    return (
      <SEE
        title={'Extravert | Sensing | Ethics | Irrational'}
        content={``}
        onBackClick={this.onSEE_click}
      />
    )
  }

  renderIEE() {
    return (
      <IEE
        title={'Extravert | iNtuitive | Ethics | Irrational'}
        content={``}
        onBackClick={this.onIEE_click}
      />
    )
  }

  renderILE() {
    return (
      <ILE
        title={'Extravert | iNtuitive | Logic | Irrational'}
        content={``}
        onBackClick={this.onILE_click}
      />
    )
  }

  renderLSE() {
    return (
      <LSE
        title={'Extravert | Sensing | Logic | Rational'}
        content={``}
        onBackClick={this.onLSE_click}
      />
    )
  }

  renderESE() {
    return (
      <ESE
        title={'Extravert | Sensing | Ethics | Rational'}
        content={``}
        onBackClick={this.onESE_click}
      />
    )
  }

  renderEIE() {
    return (
      <EIE
        title={'Extravert | iNtuitive | Ethics | Rational'}
        content={``}
        onBackClick={this.onEIE_click}
      />
    )
  }

  renderLIE() {
    return (
      <LIE
        title={'Extravert | iNtuitive | Logic | Rational'}
        content={``}
        onBackClick={this.onLIE_click}
      />
    )
  }

  render() {
    let showSLI = this.state.showSLI
    let showSEI = this.state.showSEI
    let showIEI = this.state.showIEI
    let showILI = this.state.showILI
    let showLSI = this.state.showLSI
    let showESI = this.state.showESI
    let showEII = this.state.showEII
    let showLII = this.state.showLII
    let showSLE = this.state.showSLE
    let showSEE = this.state.showSEE
    let showIEE = this.state.showIEE
    let showILE = this.state.showILE
    let showLSE = this.state.showLSE
    let showESE = this.state.showESE
    let showEIE = this.state.showEIE
    let showLIE = this.state.showLIE
    if (showSLI) {
      return this.renderSLI()
    } else if (showSEI) {
      return this.renderSEI()
    } else if (showIEI) {
      return this.renderIEI()
    } else if (showILI) {
      return this.renderILI()
    } else if (showLSI) {
      return this.renderLSI()
    } else if (showESI) {
      return this.renderESI()
    } else if (showEII) {
      return this.renderEII()
    } else if (showLII) {
      return this.renderLII()
    } else if (showSLE) {
      return this.renderSLE()
    } else if (showSEE) {
      return this.renderSEE()
    } else if (showIEE) {
      return this.renderIEE()
    } else if (showILE) {
      return this.renderILE()
    } else if (showLSE) {
      return this.renderLSE()
    } else if (showESE) {
      return this.renderESE()
    } else if (showEIE) {
      return this.renderEIE()
    } else if (showLIE) {
      return this.renderLIE()
    }
    return (
      <Wrapper>
        <h1 className="display-3 title">Sociotype Result</h1>
        <hr className="my-4" />
        <h2 className="display-6 resultTxt">{this.props.resultSociotypes}</h2>
        <hr className="my-5" />
        <p className="lead">What does this result mean?</p>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onSLI_click}>
            SLI
          </li>
          <li className="list-group-item" onClick={this.onSEI_click}>
            SEI
          </li>
          <li className="list-group-item" onClick={this.onIEI_click}>
            IEI
          </li>
          <li className="list-group-item" onClick={this.onILI_click}>
            ILI
          </li>
        </ul>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onLSI_click}>
            LSI
          </li>
          <li className="list-group-item" onClick={this.onESI_click}>
            ESI
          </li>
          <li className="list-group-item" onClick={this.onEII_click}>
            EII
          </li>
          <li className="list-group-item" onClick={this.onLII_click}>
            LII
          </li>
        </ul>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onSLE_click}>
            SLE
          </li>
          <li className="list-group-item" onClick={this.onSEE_click}>
            SEE
          </li>
          <li className="list-group-item" onClick={this.onIEE_click}>
            IEE
          </li>
          <li className="list-group-item" onClick={this.onILE_click}>
            ILE
          </li>
        </ul>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onLSE_click}>
            LSE
          </li>
          <li className="list-group-item" onClick={this.onESE_click}>
            ESE
          </li>
          <li className="list-group-item" onClick={this.onEIE_click}>
            EIE
          </li>
          <li className="list-group-item" onClick={this.onLIE_click}>
            LIE
          </li>
        </ul>
      </Wrapper>
    )
  }

  onSLI_click() {
    let showSLI = this.state.showSLI
    this.setState({ showSLI: !showSLI })
  }

  onSEI_click() {
    let showSEI = this.state.showSEI
    this.setState({ showSEI: !showSEI })
  }

  onIEI_click() {
    let showIEI = this.state.showIEI
    this.setState({ showIEI: !showIEI })
  }

  onILI_click() {
    let showILI = this.state.showILI
    this.setState({ showILI: !showILI })
  }

  onLSI_click() {
    let showLSI = this.state.showLSI
    this.setState({ showLSI: !showLSI })
  }

  onESI_click() {
    let showESI = this.state.showESI
    this.setState({ showESI: !showESI })
  }

  onEII_click() {
    let showEII = this.state.showEII
    this.setState({ showEII: !showEII })
  }

  onLII_click() {
    let showLII = this.state.showLII
    this.setState({ showLII: !showLII })
  }

  onSLE_click() {
    let showSLE = this.state.showSLE
    this.setState({ showSLE: !showSLE })
  }

  onSEE_click() {
    let showSEE = this.state.showSEE
    this.setState({ showSEE: !showSEE })
  }

  onIEE_click() {
    let showIEE = this.state.showIEE
    this.setState({ showIEE: !showIEE })
  }

  onILE_click() {
    let showILE = this.state.showILE
    this.setState({ showILE: !showILE })
  }

  onLSE_click() {
    let showLSE = this.state.showLSE
    this.setState({ showLSE: !showLSE })
  }

  onESE_click() {
    let showESE = this.state.showESE
    this.setState({ showESE: !showESE })
  }

  onEIE_click() {
    let showEIE = this.state.showEIE
    this.setState({ showEIE: !showEIE })
  }

  onLIE_click() {
    let showLIE = this.state.showLIE
    this.setState({ showLIE: !showLIE })
  }
}

Sociotype.PropTypes = {
  resultSociotypes: PropTypes.string.isRequired
}

export default Sociotype
