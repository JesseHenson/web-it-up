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
  Grid,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main,
    opacity: 0.97,
    width: "100%",
    zIndex: "999999",
  },
  button: {
    border: 0,
    borderRadius: 3,
    color: theme.palette.text.primary,
  },
  link: {
    color: theme.palette.primary,
  },
  boxForHeaderBrand: {
    marginBottom: "-100px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
    },
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
              <Grid align="center" justify="space-between" container>
                <Grid
                  className={classes.boxForHeaderBrand}
                  item
                  xs={12}
                  sm={6}
                  lg={3}
                >
                  <Link to="/">
                    <BrandLinkSVG />
                  </Link>
                </Grid>

                <Grid
                  container
                  align="center"
                  item
                  xs={12}
                  sm={6}
                  justify="flex-end"
                  spacing={6}
                >
                  <Grid item xs={4}>
                    <Link style={{ textDecoration: "none" }} to="/about">
                      <Button
                        component="p"
                        color="primary"
                        className={(classes.button, classes.link)}
                      >
                        About
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item xs={4}>
                    <Link style={{ textDecoration: "none" }} to="/blog">
                      <Button
                        component="p"
                        color="primary"
                        className={(classes.button, classes.link)}
                      >
                        Blog
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item xs={4}>
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
                  </Grid>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </CssBaseline>
    </>
  )
}

export default HeaderComponent
