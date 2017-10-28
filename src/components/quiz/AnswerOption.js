import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fonts, colors } from '../utils/_var'

const Wrapper = styled.div`
  li {
    list-style-type: none;
    input {
      position: absolute;
      opacity: 0;
      z-index: -1;
      & + label::before {
        border-radius: 18px;
      }
      &:checked + label {
        padding-left: 2rem;
        color: #fff;
      }
      &:checked + label::before {
        top: 0;
        width: 100%;
        height: 100%;
        background: ${colors.$colorGold};
      }
    }
    label {
      position: relative;
      padding-left: 3rem;
      line-height: 2.3rem;
      cursor: pointer;
      font-family: ${fonts.$mainFont};
      color: ${colors.$colorGold};
      &::before {
        content: '';
        position: absolute;
        top: 5px;
        left: 1rem;
        display: block;
        width: 25px;
        height: 25px;
        border: 2px solid ${colors.$colorGold};
        border-radius: 4px;
        z-index: -1;
      }
      &,
      &::before {
        transition: 0.5s all ease;
      }
    }
  }
`

const AnswerOption = props => {
  return (
    <Wrapper>
      <li>
        <input
          checked={props.answerType === props.answer}
          id={props.answerType}
          value={props.answerType}
          name={props.answerType}
          disabled={props.answer}
          onChange={props.onAnswerSelected}
          type="radio"
        />
        <label className="radioCustomLabel" htmlFor={props.answerType}>
          {props.answerContent}
        </label>
      </li>
    </Wrapper>
  )
}

AnswerOption.PropTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
}

export default AnswerOption
