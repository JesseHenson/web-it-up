import React from "react"
import styled from "styled-components"
import BigBrand from "../images/Big Brand.png"
import { backgroundText } from "./styledConstants"
import { GetStartedButton } from "./shared/shared"

const Card = styled.div`
  background-color: rgba(34, 34, 34, 0.6);
  position: relative;
  border-radius: 10px;
  max-width: 10rem;
  color: ${backgroundText};
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    max-width: 75%;
  }
  @media (min-width: 1200px) {
    max-width: 50%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`

const BrandImage = styled.img`
  width: 4rem;
  height: 4rem;
  position: absolute;
  top: -2rem;
  right: calc(50% - 2rem);
`

const CardContent = styled.p`
  margin: 1.5rem;
  font-size: 1.5rem;
`

const GetStartedHeroButton = styled(GetStartedButton)`
  /* something */
`
const HeroMessage = () => {
  return (
    <Card>
      <BrandImage src={BigBrand}></BrandImage>
      <CardContent>
        Set your website on Fire with blazing fast optimzation
      </CardContent>
      <GetStartedHeroButton>Get Started</GetStartedHeroButton>
    </Card>
  )
}

export default HeroMessage
