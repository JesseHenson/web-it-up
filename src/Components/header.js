import React from "react"
import styled from "styled-components"
import Brand from "../images/Group.png"
import { backgroundColor, primaryColor } from "./styledConstants"

import GatsbyLink from "gatsby-link"
import { ContactNow } from "./shared/shared"

const Header = styled.header`
  background-color: ${backgroundColor};
  color: ${primaryColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
  position: fixed;
  z-index: 999999;
`

const Image = styled.img`
  width: 100px;
  margin-bottom: -50px;
  margin-left: 2rem;
`

const LinkItem = styled(GatsbyLink)`
  color: ${primaryColor};
  text-decoration: none;
`

const LinkGroup = styled.div`
  display: flex;
  width: 33%;
  justify-content: space-around;
  align-items: center;
  margin-right: 2rem;
`

const HeaderComponent = () => (
  <Header>
    <Image src={Brand} />
    <LinkGroup>
      <LinkItem to="/">About</LinkItem>
      <LinkItem to="/">Blog</LinkItem>
      <ContactNow to="/">Contact Now</ContactNow>
    </LinkGroup>
  </Header>
)

export default HeaderComponent
