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

export const SLI = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-justify">{content}</p>
          <p className="text-justify"><a href="http://www.wikisocion.net/en/index.php?title=SLI_Profile_by_Gulenko">SLI Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const SEI = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-justify">{content}</p>
          <p className="text-justify"><a href="http://www.wikisocion.net/en/index.php?title=SEI_Profile_by_Gulenko">SEI Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const IEI = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-justify">{content}</p>
          <p className="text-justify"><a href="http://www.wikisocion.net/en/index.php?title=IEI_Profile_by_Gulenko">IEI Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const ILI = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-justify">{content}</p>
          <p className="text-justify"><a href="http://www.wikisocion.net/en/index.php?title=ILI_Profile_by_Gulenko">ILI Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const LSI = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-justify">{content}</p>
          <p className="text-justify"><a href="http://www.wikisocion.net/en/index.php?title=LSI_Profile_by_Gulenko">LSI Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const ESI = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-justify">{content}</p>
          <p className="text-justify"><a href="http://www.wikisocion.net/en/index.php?title=ESI_Profile_by_Gulenko">ESI Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const EII = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-justify">{content}</p>
          <p className="text-justify"><a href="http://www.wikisocion.net/en/index.php?title=EII_Profile_by_Gulenko">EII Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const LII = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-justify">{content}</p>
          <p className="text-justify"><a href="http://www.wikisocion.net/en/index.php?title=LII_Profile_by_Gulenko">LII Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const SLE = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-justify">{content}</p>
          <p className="text-justify"><a href="http://www.wikisocion.net/en/index.php?title=SLE_Profile_by_Gulenko">SLE Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const SEE = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-justify">{content}</p>
          <p className="text-justify"><a href="http://www.wikisocion.net/en/index.php?title=SEE_Profile_by_Gulenko">SEE Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const IEE = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-justify">{content}</p>
          <p className="text-justify"><a href="http://www.wikisocion.net/en/index.php?title=IEE_Profile_by_Gulenko">IEE Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const ILE = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-justify">{content}</p>
          <p className="text-justify"><a href="http://www.wikisocion.net/en/index.php?title=ILE_Profile_by_Gulenko">ILE Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const LSE = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-justify">{content}</p>
          <p className="text-justify"><a href="http://www.wikisocion.net/en/index.php?title=LSE_Profile_by_Gulenko">LSE Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const ESE = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-justify">{content}</p>
          <p className="text-justify"><a href="http://www.wikisocion.net/en/index.php?title=ESE_Profile_by_Gulenko">ESE Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const EIE = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-justify">{content}</p>
          <p className="text-justify"><a href="http://www.wikisocion.net/en/index.php?title=EIE_Profile_by_Gulenko">EIE Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}

export const LIE = ({ title, content, onBackClick }) => {
  return (
    <Wrapper className="container">
      <CardDef>
        <h1>{title}</h1>
        <div className="close" onClick={onBackClick}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <div>
          <p className="text-justify">{content}</p>
          <p className="text-justify"><a href="http://www.wikisocion.net/en/index.php?title=LIE_Profile_by_Gulenko">LIE Profile</a></p>
        </div>
      </CardDef>
    </Wrapper>
  )
}
