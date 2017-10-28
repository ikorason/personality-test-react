import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from '../utils/ResultWrapper'

class Briggs extends Component {
  render() {
    return (
      <Wrapper>
        <h1 className="display-3 title">Briggs Result</h1>
        <hr className="my-4" />
        <h2 className="display-6 resultTxt">Coming Soon.....</h2>
        {/* <h2 className="display-6 resultTxt">{this.props.resultBriggs}</h2>
        <hr className="my-5" />
        <p className="lead">What does this result mean?</p>
        <ul className="list-group">
          <li className="list-group-item">
            Letter A
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item">
            Letter B
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item">
            Letter C
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item">
            Letter D
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
        </ul> */}
      </Wrapper>
    )
  }
}

Briggs.PropTypes = {
  resultBriggs: PropTypes.string.isRequired
}

export default Briggs
