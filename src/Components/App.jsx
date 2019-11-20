import React from 'react'
import GlobalStyle from './GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from './Theme'
import Router from './Router'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  )
}

export default App
