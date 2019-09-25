import React from "react"
import styled from "styled-components"
import "./layout.css"

import HeaderComponent from "./header"
import Footer from "./footer"

const StyledMainWrapper = styled.main`
  display: flex;
  margin: auto;
  flex-direction: column;
  max-width: 1200px;
`

export default ({ children }) => (
  <>
    <HeaderComponent />
    <StyledMainWrapper>{children} </StyledMainWrapper>
    <Footer />
  </>
)
