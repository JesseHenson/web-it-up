import React from "react"

import styled from "styled-components"
import {
  backgroundColor,
  primaryColor,
  backgroundText,
} from "./styledConstants"
import BigBrand from "../images/Big Brand.png"
import frogIcon from "../images/frog-icon.png"
import spring from "../images/spring.png"
import campfire from "../images/campfire.png"
import { GetStartedButton } from "../Components/shared/shared"

const StyledSection = styled.section`
  position: relative;
  background-color: ${primaryColor};
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

const AboutSection = () => (
  <StyledSection>
    <StyledBrandImage src={BigBrand}></StyledBrandImage>
    <StyledArticle>
      <CardWrapper>
        <IconImage src={campfire}></IconImage>
        <Card>
          <CardTitle>Blazing Fast Speeds</CardTitle>
          <CardStatement>
            We optimize and opt for the fastest frameworks to{" "}
            <span style={{ color: `${primaryColor}` }}>
              make sure your site is as fast as possible.{" "}
            </span>
            <br />
            <br />
            <span style={{ color: `${primaryColor}` }}>
              Users wait 3 seconds
            </span>{" "}
            on average for your site.
            <br />
            <br />
            Do you have what it takes?
          </CardStatement>
          <GetStartedButton to="/get-started">Get Started</GetStartedButton>
        </Card>
      </CardWrapper>
      <ShortCard>
        <IconImage src={spring}></IconImage>
        <Card>
          <CardTitle>Flexible</CardTitle>
          <CardStatement>
            Minimal framework and limiting platforms so{" "}
            <span style={{ color: `${primaryColor}` }}>
              you can scale and build your site your way.
            </span>{" "}
            <br />
            <br />
            Flexible enough to{" "}
            <span style={{ color: `${primaryColor}` }}>
              add login functionality or even ecommerce{" "}
            </span>
            within your site.
            <br />
            <br />
            Adding{" "}
            <span style={{ color: `${primaryColor}` }}>
              {" "}
              plugins to your favorite CMS
            </span>{" "}
            is a breeze
          </CardStatement>
          <GetStartedButton to="/get-started">Get Started</GetStartedButton>
        </Card>
      </ShortCard>
      <ThirdCard>
        <IconImage src={frogIcon}></IconImage>
        <Card>
          <CardTitle>Branded</CardTitle>
          <CardStatement>
            Minimal and simple colors, and logos are our bread and butter.
            <br />
            <br />
            We give you a page with{" "}
            <span style={{ color: `${primaryColor}` }}>
              focused branding and minimal clutter.
            </span>
            <br />
            <br />
            We use an{" "}
            <span style={{ color: `${primaryColor}` }}>
              expert photographer{" "}
            </span>
            for an even more specialized branding experience.
          </CardStatement>
          <GetStartedButton to="/get-started">Get Started</GetStartedButton>
        </Card>
      </ThirdCard>
    </StyledArticle>
  </StyledSection>
)

export default AboutSection
