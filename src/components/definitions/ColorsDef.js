import React from 'react'
import { CardDef } from '../utils/Cards'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  min-height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const BrownDef = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </CardDef>
    </Wrapper>
  )
}

const GreenDef = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </CardDef>
    </Wrapper>
  )
}

const BlueDef = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </CardDef>
    </Wrapper>
  )
}

const RedDef = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <p className="text-justify">{content}</p>
      </CardDef>
    </Wrapper>
  )
}

export { BrownDef, GreenDef, BlueDef, RedDef }
