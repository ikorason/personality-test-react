import styled from 'styled-components'
import { media } from './_media-queries'

const StartBtn = styled.div`
  display: block;
  width: 12em;
  height: 3.5em;
  color: #fff;
  position: absolute;
  line-height: 3.5em;
  bottom: 2em;
  left: 0;
  right: 0;
  margin: auto;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
  transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4);
  span,
  .icon {
    display: block;
    height: 100%;
    text-align: center;
    position: absolute;
    top: 0;
    color: #fff;
  }
  span {
    width: 72%;
    line-height: inherit;
    font-size: 1em;
    text-transform: uppercase;
    left: 0;
    transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4);
  }
  .icon {
    width: 28%;
    right: 0;
    transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4);
  }
  .fa {
    font-size: 1em;
    transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4), height 0.25s ease;
  }
  &:hover {
    opacity: 0.9;
    animation: none;
    span {
      left: -72%;
      opacity: 0;
    }
    .icon {
      width: 100%;
      .fa {
        font-size: 1em;
      }
    }
  }
  ${media.laptop`width:15em;`};
`

const NextBtn = styled.div`
  display: block;
  width: 12em;
  height: 3.5em;
  color: #fff;
  position: absolute;
  line-height: 3.5em;
  bottom: 1em;
  left: 0;
  right: 0;
  margin: auto;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
  transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4);
  ${media.laptop`bottom: 4em;`};
  span,
  .icon {
    display: block;
    height: 100%;
    text-align: center;
    position: absolute;
    top: 0;
    color: #fff;
  }
  span {
    width: 72%;
    line-height: inherit;
    font-size: 1em;
    text-transform: uppercase;
    left: 0;
    transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4);
  }
  .icon {
    width: 28%;
    right: 0;
    transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4);
  }
  .fa {
    font-size: 1em;
    transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4), height 0.25s ease;
  }
  &:hover {
    opacity: 0.9;
    animation: none;
    span {
      left: -72%;
      opacity: 0;
    }
    .icon {
      width: 100%;
      .fa {
        font-size: 1em;
      }
    }
  }
  ${media.laptop`width:15em;`};
`

export { StartBtn, NextBtn }
