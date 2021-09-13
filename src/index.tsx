import React from 'react'
import ReactDOM from 'react-dom'
import {Reimbursement} from './App'
import {ThemeProvider} from '@material-ui/styles'
import {CssBaseline, StylesProvider} from '@material-ui/core'
import theme from './theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StylesProvider>
        <Reimbursement />
      </StylesProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
