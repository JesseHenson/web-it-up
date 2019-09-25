import React from "react"
import styled from "styled-components"
import BigBrand from "../images/Big Brand.png"
import { backgroundText } from "./styledConstants"
import { GetStartedButton } from "./shared/shared"

const Card = styled.div`
  background-color: rgba(34, 34, 34, 0.6);
  position: relative;
  border-radius: 10px;
  width: 25%;
  color: ${backgroundText};
  padding-top: 4rem;
  padding-bottom: 2rem;
  text-align: center;
  @media (max-width: 768px) {
    width: 75%;
  }
`

const BrandImage = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  top: -75px;
  right: calc(50% - 75px);
`

const CardContent = styled.p`
  margin: 20px;
  font-size: 40px;
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
