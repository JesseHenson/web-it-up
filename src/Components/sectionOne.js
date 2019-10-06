import React from "react"
import styled from "styled-components"
import {
  backgroundColor,
  backgroundText,
  primaryColor,
} from "./styledConstants"
import { ContactNow } from "./shared/shared"
import { Box, makeStyles, Button } from "@material-ui/core"
import { Link } from "gatsby"

export const StyledSectionOne = styled.section`
  background-color: ${backgroundColor};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: 50px;
`

const SectionOneContactNow = styled(ContactNow)`
  margin-bottom: 150px;
`

export const StyledArticleOne = styled.article``

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "50px",
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
    <Box component="section" className={classes.container}>
      <Box component="article" className={classes.article}>
        Most users will wait an{" "}
        <span className={classes.highlight}>average of 3 seconds. </span>
        They are accessing your site on a mobile device possibly{" "}
        <span className={classes.highlight}>with 3G technology. </span>
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
    </Box>
  )
}
