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
  @media (min-width: 1200px) {
    padding: 2rem;
  }
`

const Image = styled.img`
  width: 6rem;
  margin-bottom: -6.5px;
  height: 4rem;
  margin-left: 0;
  @media (max-width: 768px) {
    width: 6rem;
    margin-bottom: -4.5rem;
    height: 4rem;
    margin-left: 0;
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
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    width: 66%;
  }
`

const HeaderComponent = () => (
  <Header>
    <Image src={Brand} />
    <LinkGroup>
      <LinkItem to="/">About</LinkItem>
      <LinkItem to="/">Blog</LinkItem>
      <HeaderContact to="/">Contact Now</HeaderContact>
    </LinkGroup>
  </Header>
)

export default HeaderComponent
