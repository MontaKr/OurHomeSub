import React from 'react'
import { GlobalStyle, MainContainer } from './mainStyles'
import Nav from './components/nav/Nav'
import { BrowserRouter } from "react-router-dom";
import RootRoute from "./routes/index"

const App = () => {



  return (
    <BrowserRouter>
      <GlobalStyle/>
      <MainContainer>
        <Nav/>
        <RootRoute />
      </MainContainer>
    </BrowserRouter>
  )
}

export default App