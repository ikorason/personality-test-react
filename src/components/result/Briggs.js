import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from '../utils/ResultWrapper'
import {
  ISTJ,
  ISFJ,
  INFJ,
  INTJ,
  ISTP,
  ISFP,
  INFP,
  INTP,
  ESTP,
  ESFP,
  ENFP,
  ENTP,
  ESTJ,
  ESFJ,
  ENFJ,
  ENTJ
} from '../definitions/BriggsDef'

class Briggs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showISTJ: false,
      showISFJ: false,
      showINFJ: false,
      showINTJ: false,
      showISTP: false,
      showISFP: false,
      showINFP: false,
      showINTP: false,
      showESTP: false,
      showESFP: false,
      showENFP: false,
      showENTP: false,
      showESTJ: false,
      showESFJ: false,
      showENFJ: false,
      showENTJ: false
    }
    this.onISTJ_click = this.onISTJ_click.bind(this)
    this.onISFJ_click = this.onISFJ_click.bind(this)
    this.onINFJ_click = this.onINFJ_click.bind(this)
    this.onINTJ_click = this.onINTJ_click.bind(this)
    this.onISTP_click = this.onISTP_click.bind(this)
    this.onISFP_click = this.onISFP_click.bind(this)
  }

  renderISTJ() {
    return (
      <ISTJ
        title={'Introvert | Sensing | Thinking | Judging'}
        content={`You are a type ISTJ, aka The Inspector.
                You tend to be practical and logical above all else.
                You should consider a job in accounting or engineering.`}
        onBackClick={this.onISTJ_click}
      />
    )
  }

  renderISFJ() {
    return (
      <ISFJ
        title={'Introvert | Sensing | Feeling | Judging'}
        content={`You are a type ISFJ, aka The Protector.
                  You tend to be sympathetic and organized above all else.
                  You should consider a job in childcare or bookkeeping.`}
        onBackClick={this.onISFJ_click}
      />
    )
  }

  renderINFJ() {
    return (
      <INFJ
        title={'Introvert | iNtuitive | Feeling | Judging'}
        content={`You are a type INFJ, aka The Counselor.
                You tend to be sensitive and creative above all else.
                You should consider a job in education or the arts.`}
        onBackClick={this.onINFJ_click}
      />
    )
  }

  renderINTJ() {
    return (
      <INTJ
        title={'Introvert | iNtuitive | Thinking | Judging'}
        content={`You are a type INTJ, aka The Mastermind.
                      You tend to be decisive and insightful above all else.
                      You should consider a job in architecture or engineering.`}
        onBackClick={this.onINTJ_click}
      />
    )
  }

  renderISTP() {
    return (
      <ISTP
        title={'Introvert | Sensing | Thinking | Perceiving'}
        content={`You are a type ISTP, aka The Operator.
                  You tend to be analytical and practical above all else.
                  You should consider a job in computer technology or farming.`}
        onBackClick={this.onISTP_click}
      />
    )
  }

  renderISFP() {
    return (
      <ISFP
        title={'Introvert | Sensing | Feeling | Perceiving'}
        content={`You are a type ISFP, aka The Composer.
                  You tend to be loyal and adaptable above all else.
                  You should consider a job in teaching or nursing.`}
        onBackClick={this.onISFP_click}
      />
    )
  }

  render() {
    let showISTJ = this.state.showISTJ
    let showISFJ = this.state.showISFJ
    let showINFJ = this.state.showINFJ
    let showINTJ = this.state.showINTJ
    let showISTP = this.state.showISTP
    let showISFP = this.state.showISFP
    if (showISTJ) {
      return this.renderISTJ()
    } else if (showISFJ) {
      return this.renderISFJ()
    } else if (showINFJ) {
      return this.renderINFJ()
    } else if (showINTJ) {
      return this.renderINTJ()
    } else if (showISTP) {
      return this.renderISTP()
    } else if (showISFP) {
      return this.renderISFP()
    }
    return (
      <Wrapper>
        <h1 className="display-3 title">Briggs Result</h1>
        <hr className="my-4" />
        {/* <h2 className="display-6 resultTxt">{this.props.resultBriggs}</h2> */}
        <h2 className="display-6 resultTxt">Coming Soon.....</h2>
        <hr className="my-5" />
        <p className="lead">What does this result mean?</p>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onISTJ_click}>
            ISTJ
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onISFJ_click}>
            ISFJ
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onINFJ_click}>
            INFJ
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onINTJ_click}>
            INTJ
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
        </ul>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onISTP_click}>
            ISTP
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onISFP_click}>
            ISFP
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
        </ul>
      </Wrapper>
    )
  }

  onISTJ_click() {
    let showISTJ = this.state.showISTJ
    this.setState({ showISTJ: !showISTJ })
  }

  onISFJ_click() {
    let showISFJ = this.state.showISFJ
    this.setState({ showISFJ: !showISFJ })
  }

  onINFJ_click() {
    let showINFJ = this.state.showINFJ
    this.setState({ showINFJ: !showINFJ })
  }

  onINTJ_click() {
    let showINTJ = this.state.showINTJ
    this.setState({ showINTJ: !showINTJ })
  }

  onISTP_click() {
    let showISTP = this.state.showISTP
    this.setState({ showISTP: !showISTP })
  }

  onISFP_click() {
    let showISFP = this.state.showISFP
    this.setState({ showISFP: !showISFP })
  }
}

Briggs.PropTypes = {
  resultBriggs: PropTypes.string.isRequired
}

export default Briggs
