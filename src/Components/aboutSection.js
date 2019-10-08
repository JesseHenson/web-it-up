import React from "react"

import styled from "styled-components"
import {
  backgroundColor,
  primaryColor,
  backgroundText,
  primaryBackground,
} from "./styledConstants"
import BigBrand from "../images/Big Brand.png"
import frogIcon from "../images/frog-icon.png"
import spring from "../images/spring.png"
import campfire from "../images/campfire.png"
import { GetStartedButton } from "../Components/shared/shared"

const StyledSection = styled.section`
  position: relative;
  background: ${primaryBackground};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 0;
  margin-top: -20px;
  border-radius: 10px 10px 0 0;
  max-width: 1200px;
`

const StyledBrandImage = styled.img`
  position: absolute;
  bottom: -2rem;
  left: calc(50%-100px);
  width: 200px;
`

const StyledArticle = styled.article`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const CardWrapper = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Card = styled.div`
  border-radius: 10px;
  background-color: ${backgroundColor};
  padding: 20px;
  height: 100%;
  margin: 20px 30px 15px 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-align: center;
`

const ShortCard = styled(CardWrapper)`
  margin-bottom: 9rem;
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`

const ThirdCard = styled(CardWrapper)`
  @media (max-width: 768px) {
    margin-bottom: 9rem;
  }
`

export const CardTitle = styled.h1`
  color: ${backgroundText};
`

export const CardStatement = styled.p`
  color: ${backgroundText};
`

export const IconImage = styled.img`
  width: 50px;
  height: 50px;
`

const AboutSection = () => <div></div>

export default AboutSection
