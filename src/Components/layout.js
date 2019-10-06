import React from "react"
import { makeStyles, ThemeProvider } from "@material-ui/styles"
import { createMuiTheme } from "@material-ui/core"
import styled from "styled-components"
import "./layout.css"

import HeaderComponent from "./header"
import Footer from "./footer"

import Box from "@material-ui/core/Box"

const useStyles = makeStyles(theme => ({
  box: {
    display: "flex",
    margin: "auto",
    flexDirection: "column",
    maxWidth: "1200px",
  },
}))

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#c16754",
    },
    text: {
      primary: "#f1eeeb",
    },
    background: {
      default: "#222",
    },
  },
})

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <HeaderComponent />
    <Box component="main">{children}</Box>
    {/* <StyledMainWrapper>{children} </StyledMainWrapper> */}
    <Footer />
  </ThemeProvider>
)

export default Layout
