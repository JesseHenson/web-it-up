import React from "react"
import { makeStyles, ThemeProvider } from "@material-ui/styles"
import { createMuiTheme, Container } from "@material-ui/core"
import "./layout.css"

import HeaderComponent from "./header"
import Footer from "./footer"

const useStyles = makeStyles(theme => ({
  container: {
    overflowX: "hidden",
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

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <HeaderComponent />
      <div className={classes.container}> {children}</div>

      <Footer />
    </ThemeProvider>
  )
}

export default Layout
