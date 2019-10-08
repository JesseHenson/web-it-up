import React from "react"
import styled from "styled-components"
import { backgroundColor } from "./styledConstants"
import { Link } from "gatsby"
import { FacebookSvg, GithubSvg, TwitterSvg } from "./iconSvg"
import { BrandLinkSVG } from "./brandSvg"

const StyledFooter = styled.footer`
  max-width: 100%;
  display: flex;
  padding: 1rem 2rem;
  align-items: center;
  justify-content: space-between;
  background-color: ${backgroundColor};
  @media (min-width: 1200px) {
    padding: 2rem 10rem;
  }
`

const ContactIconWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
`

const Footer = () => {
  return (
    <StyledFooter>
      <Link to="/">
        <BrandLinkSVG />
      </Link>
      <ContactIconWrapper>
        <a href="https://github.com/JesseHenson/web-it-up">
          <FacebookSvg />
        </a>
        <a href="https://twitter.com/henson_dev">
          <TwitterSvg />
        </a>
        <a href="https://www.facebook.com/WebbitUpDev/">
          <GithubSvg />
        </a>
      </ContactIconWrapper>
    </StyledFooter>
  )
}

export default Footer
