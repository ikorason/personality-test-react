import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { colors } from './components/utils/_var'
import { injectGlobal } from 'styled-components'
import registerServiceWorker from './registerServiceWorker'

// global styles
injectGlobal`
  body {
    background-color: ${colors.$colorBg};
    color: #fff;
  }
`

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
