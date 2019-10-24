import React from "react"

import { Link } from "gatsby"
import { FacebookSvg, GithubSvg, TwitterSvg } from "./iconSvg"
import { BrandLinkSVG } from "./brandSvg"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <>
      <Grid
        container
        spacing={3}
        className={classes.container}
        justify="space-between"
      >
        <Grid item align="center" justify="center" xs={12} sm={6} lg={3}>
          <Link to="/">
            <BrandLinkSVG />
          </Link>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="space-around"
          xs={12}
          sm={6}
        >
          <Grid item>
            <a href="https://github.com/JesseHenson/web-it-up">
              <FacebookSvg />
            </a>
          </Grid>
          <Grid item>
            <a href="https://twitter.com/henson_dev">
              <TwitterSvg />
            </a>
          </Grid>
          <Grid item>
            <a href="https://www.facebook.com/WebbitUpDev/">
              <GithubSvg />
            </a>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Footer
