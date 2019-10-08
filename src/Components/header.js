import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import CssBaseline from "@material-ui/core/CssBaseline"
import { BrandLinkSVG } from "../Components/brandSvg"
import Button from "@material-ui/core/Button"

import {
  makeStyles,
  Box,
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main,
    display: "flex",
    opacity: 0.97,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    zIndex: "999999",
  },
  button: {
    border: 0,
    borderRadius: 3,
    color: theme.palette.text.primary,
    marginRight: theme.spacing(4),
    marginLeft: theme.spacing(4),
  },
  link: {
    color: theme.palette.primary,
    marginRight: theme.spacing(4),
    marginLeft: theme.spacing(4),
  },
  boxForHeaderBrand: {
    marginBottom: "-75px",
    marginLeft: theme.spacing(5),
  },
}))

function HideOnScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
}

const HeaderComponent = props => {
  const classes = useStyles()

  return (
    <>
      <CssBaseline>
        <HideOnScroll {...props}>
          <AppBar>
            <Toolbar className={classes.header}>
              <Box className={classes.boxForHeaderBrand}>
                <Link to="/">
                  <BrandLinkSVG />
                </Link>
              </Box>

              <Box>
                <Link style={{ textDecoration: "none" }} to="/about">
                  <Button
                    component="p"
                    color="primary"
                    className={(classes.button, classes.link)}
                  >
                    About
                  </Button>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/blog">
                  <Button
                    component="p"
                    color="primary"
                    className={(classes.button, classes.link)}
                  >
                    Blog
                  </Button>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/get-started">
                  <Button
                    component="p"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    Contact Now
                  </Button>
                </Link>
              </Box>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </CssBaseline>
    </>
  )
}

export default HeaderComponent
