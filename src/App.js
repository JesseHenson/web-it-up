import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Header from "./Components/header"
import Footer from "./Components/footer"
import Main from "./Components/main"
import styled from "styled-components"

const StyledApp = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    "head"
    "main"
    "foot";
  grid-template-rows: 70px 1fr 30px;
  grid-template-columns: 1fr;
`

function App() {
  return (
    <StyledApp>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </StyledApp>
  )
}

export default App
