import React from "react"

import { Box, makeStyles, Button, Container } from "@material-ui/core"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "50px",
    height: "100vh",
  },
  article: {
    width: "75%",
    marginTop: "50px",
    marginBottom: "50px",
    fontSize: "2rem",
    color: theme.palette.text.primary,
    lineHeight: "45px",
    textAlign: "center",
  },
  highlight: {
    color: theme.palette.primary.main,
  },
  button: {
    border: 0,
    borderRadius: 3,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(15),
  },
}))

export default () => {
  const classes = useStyles()
  return (
    <Container component="section" className={classes.container}>
      <Box component="article" className={classes.article}>
        Most users will only wait{" "}
        <span className={classes.highlight}>
          3 seconds before they'll go find a different site.{" "}
        </span>
        They're probably using a mobile phone with slow service and maybe even{" "}
        <span className={classes.highlight}> 3G technology. </span>
        Are they going to view and possibly buy your product... or{" "}
        <span className={classes.highlight}>
          are they going somewhere else.
        </span>
      </Box>
      <Link style={{ textDecoration: "none" }} to="/get-started">
        <Button
          component="p"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Find Out Now
        </Button>
      </Link>
    </Container>
  )
}
