import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fonts, colors } from '../utils/_var'
import { media } from '../utils/_media-queries'

const Wrapper = styled.div`
  margin: 0.2em;
  ${media.largerPhone`margin: .4em;`};
  ${media.tablet`margin: 1em 2.5em;`};
  ${media.laptop`margin: 1em 2.5em;`};
  .row {
    margin: 0;
    .col {
      padding: 0;
      .questionCount {
        position: relative;
        padding: 1em;
        font-size: 1em;
        font-family: ${fonts.$latoFont};
        color: ${colors.$colorGold};
        ${media.largerPhone`font-size: 1.2em;`};
      }
    }
  }
`

const QuestionCount = props => {
  return (
    <Wrapper>
      <div className="row">
        <div className="col">
          <div className="questionCount">
            Question <span>{props.counter}</span> of <span>{props.total}</span>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

QuestionCount.PropTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}

export default QuestionCount
