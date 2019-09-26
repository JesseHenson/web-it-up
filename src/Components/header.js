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

const HeaderContact = styled(ContactNow)`
  padding: 5px 10px 5px 10px;
`

const LinkItem = styled(GatsbyLink)`
  color: ${primaryColor};
  text-decoration: none;
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

const HeaderComponent = () => (
  <Header>
    <LinkItem to="/">
      <Image src={Brand} />
    </LinkItem>
    <LinkGroup>
      <LinkItem to="/about">About</LinkItem>
      <LinkItem to="/blog">Blog</LinkItem>
      <HeaderContact to="/get-started">Contact Now</HeaderContact>
    </LinkGroup>
  </Header>
)

export default HeaderComponent
