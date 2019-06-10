import styled from 'styled-components'
import { fonts, colors } from './_var'
import { media } from './_media-queries'

export const IntroCard = styled.div.attrs({
  className: 'card'
})`
  position: absolute;
  height: 60%;
  width: 80%;
  top: 20%;
  left: 0;
  right: 0;
  margin: auto;
  box-shadow: 0px -6px 8px 0px rgba(0, 0, 0, 0.1), 0px 6px 8px 0px rgba(0, 0, 0, 0.1),
    6px 0px 8px 0px rgba(0, 0, 0, 0.1), -6px 0px 8px 0px rgba(0, 0, 0, 0.1);
  background: ${colors.$colorCardBg};
  background: repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.3), transparent 1px, rgba(0, 0, 0, 0.3) 2px);
  background-size: 3px 3px;
  ${media.tablet`width: 90%;`};
  ${media.laptop`width: 60%;`};
  .corner {
    backface-visibility: hidden;
    border-right: 2px solid #d4cd96;
    border-top: 2px solid #d4cd96;
    height: 12px;
    position: absolute;
    width: 12px;
    &:nth-of-type(1) {
      right: 5%;
      top: 5%;
    }
    &:nth-of-type(2) {
      left: 5%;
      top: 5%;
      transform: rotateZ(-90deg);
    }
    &:nth-of-type(3) {
      bottom: 5%;
      left: 5%;
      transform: rotateZ(180deg);
    }
    &:nth-of-type(4) {
      bottom: 5%;
      right: 5%;
      transform: rotateZ(90deg);
    }
  }
`

export const QuestionCard = styled.div.attrs({
  className: 'card'
})`
  position: relative;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
  background: ${colors.$colorCardBg};
  background: repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.3), transparent 1px, rgba(0, 0, 0, 0.3) 2px);
  background-size: 3px 3px;
  color: #fff;
  ${media.tablet`width: 90%;`};
  ${media.laptop`width: 60%;`};
  .corner {
    backface-visibility: hidden;
    border-right: 2px solid #d4cd96;
    border-top: 2px solid #d4cd96;
    height: 12px;
    position: absolute;
    width: 12px;
    &:nth-of-type(1) {
      right: 5%;
      top: 5%;
    }
    &:nth-of-type(2) {
      left: 5%;
      top: 5%;
      transform: rotateZ(-90deg);
    }
    &:nth-of-type(3) {
      bottom: 5%;
      left: 5%;
      transform: rotateZ(180deg);
    }
    &:nth-of-type(4) {
      bottom: 5%;
      right: 5%;
      transform: rotateZ(90deg);
    }
  }
`

export const CardDef = styled.div.attrs({
  className: 'card'
})`
  position: relative;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
  background: ${colors.$colorCardBg};
  background: repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.3), transparent 1px, rgba(0, 0, 0, 0.3) 2px);
  background-size: 3px 3px;
  color: #fff;
  ${media.tablet`width: 90%;`};
  ${media.laptop`width: 60%;`};
  h1 {
    position: relative;
    font-family: ${fonts.$titleFont};
    font-size: 1.1em;
    color: ${colors.$colorGold};
    text-align: center;
    margin-top: 2em;
    ${media.tablet`font-size: 1.5em; letter-spacing: 1.5px; margin-top: 3em;`};
    ${media.laptop`font-size: 2em; letter-spacing: 2px; margin-top: 1.5em;`};
  }
  .close {
    position: absolute;
    left: 3%;
    top: 2%;
    color: #fff;
    text-shadow: none;
    ${media.tablet`font-size: 1.8em;`};
    ${media.laptop`font-size: 2em; top: 5%;`};
  }
  p {
    padding: 1em 2.5em;
    font-size: 1em;
    font-family: ${fonts.$latoFont};
    ${media.tablet`font-size: 1.5em; padding: 1.5em 2em;`};
    ${media.laptop`font-size: 2em; padding: 1em 2.5em;`};
  }
`
