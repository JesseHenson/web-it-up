import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { backgroundColor, primaryColor } from "../styledConstants"

export const GatsbyLink = props => <Link {...props}>{props.children}</Link>

export const ContactNow = styled(GatsbyLink)`
  color: ${backgroundColor};
  background-color: ${primaryColor};
  text-decoration: none;
  border-radius: 10px;
  padding: 5px 10px 5px 10px;
`

export const GetStartedButton = styled(ContactNow)`
  margin-top: 20px;
  background-color: ${backgroundColor};
  color: ${primaryColor};
  border: 1px solid ${primaryColor};
  padding: 10px;
`
