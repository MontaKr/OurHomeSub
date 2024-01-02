import React from 'react'
import { GlobalStyle, MainContainer } from './mainStyles'
import Nav from './components/nav/Nav'

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <MainContainer>
        <Nav></Nav>
      </MainContainer>
    </>
  )
}

export default App