import React from "react"
import styled from "styled-components"
import Brand from "../images/Group.png"
import twitter from "../images/twitter-sign.png"
import facebook from "../images/facebook-logo.png"
import github from "../images/github-sign.png"
import { backgroundColor } from "./styledConstants"

const Image = styled.img`
  width: 100px;
  height: 60px;
  @media (max-width: 768px) {
  }
`

const StyledFooter = styled.footer`
  max-width: 100%;
  display: flex;
  padding: 1rem 2rem;
  align-items: center;
  justify-content: space-between;
  background-color: ${backgroundColor};
`

const ContactIconWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
`

const ContactIcon = styled.img`
  width: 64px;
  height: 64px;
  @media (max-width: 768px) {
    height: 32px;
    width: 32px;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <Image src={Brand} />
      <ContactIconWrapper>
        <ContactIcon src={github} />
        <ContactIcon src={twitter} />
        <ContactIcon src={facebook} />
      </ContactIconWrapper>
    </StyledFooter>
  )
}

export default Footer
