import styled from 'styled-components'
import { media } from './_media-queries'
import { fonts, colors } from './_var'

export const Wrapper = styled.div.attrs({
  className: 'jumbotron'
})`
  background-color: inherit;
  .title {
    font-family: ${fonts.$titleFont};
    font-size: 2em;
    text-align: center;
    ${media.tablet`font-size: 2.5em`};
    ${media.laptop`font-size: 3em`};
  }
  .my-4 {
    background-color: #fff;
    width: 60%;
    ${media.tablet`width: 40%;`};
    ${media.laptop`width: 25%;`};
  }
  .resultTxt {
    font-family: ${fonts.$mainFont};
    color: ${colors.$colorGold};
    text-align: center;
    ${media.tablet`font-size: 2em`};
    ${media.laptop`font-size: 2.2em`};
  }
  .my-5 {
    width: 0;
    margin-bottom: -1em !important;
  }
  .lead {
    font-family: ${fonts.$titleFont};
    text-align: center;
    ${media.tablet`font-size: 2em`};
  }
  .list-group {
    padding: 0 2em;
    ${media.tablet`padding: 0 5em;`};
    ${media.laptop`padding: 0 25em;`};
    .list-group-item {
      background: ${colors.$colorCardBg};
      background: repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.3), transparent 1px, rgba(0, 0, 0, 0.3) 2px);
      background-size: 3px 3px;
      padding: 1em 1.25em;
      font-family: ${fonts.$latoFont};
      border: 0;
      margin-bottom: 0;
      color: ${colors.$colorGold};
      ${media.tablet`font-size: 1.3em`};
      .icon {
        display: inline-block;
        position: absolute;
        right: 5%;
      }
    }
    &.briggs {
      flex-direction: row;
      flex-grow: 1;
      .list-group-item {
        text-align: center;
        width: 30%;
        .icon {
          display: inline-block;
          position: absolute;
          right: 5%;
        }
      }
    }
  }
`
