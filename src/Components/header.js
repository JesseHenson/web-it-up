import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Brand from "../images/Group.png"
import { backgroundColor, primaryColor } from "./styledConstants"
import Button from "@material-ui/core/Button"

import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  button: {
    border: 0,
    borderRadius: 3,
    color: theme.palette.text.primary,
    marginRight: theme.spacing(1),
  },
  link: {
    color: theme.palette.primary,
  },
}))

const Header = styled.header`
  background-color: ${backgroundColor};
  color: ${primaryColor};
  display: flex;
  opacity: 0.97;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 999999;
`

const Image = styled.img`
  width: 6rem;
  margin-bottom: -3.5rem;
  height: 4rem;
  margin-left: 5rem;
  @media (max-width: 768px) {
    width: 6rem;
    margin-bottom: -3.5rem;
    height: 4rem;
    margin-left: 2rem;
  }
`

const LinkGroup = styled.div`
  display: flex;
  width: 33%;
  justify-content: space-between;
  align-items: center;
  margin-right: 5rem;
  padding: 1rem 0;
  @media (max-width: 768px) {
    width: 66%;
    margin-right: 2rem;
  }
`

const HeaderComponent = () => {
  const classes = useStyles()

  return (
    <Header>
      <Link to="/">
        <Image src={Brand} />
      </Link>
      <LinkGroup>
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
      </LinkGroup>
    </Header>
  )
}

export default HeaderComponent
