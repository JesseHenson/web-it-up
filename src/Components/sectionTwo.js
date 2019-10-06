import React from "react"
import styled from "styled-components"
import {
  backgroundColor,
  primaryColor,
  backgroundText,
} from "./styledConstants"
import frogIcon from "../images/frog-icon.png"
import spring from "../images/spring.png"
import campfire from "../images/campfire.png"
import { GetStartedButton } from "../Components/shared/shared"
import BrandSvg from "./brandSvg"
import {
  Box,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
  CardHeader,
} from "@material-ui/core"
import { Link } from "gatsby"
import { FrogSvg, FireSvg } from "./iconSvg"

const StyledSectionTwo = styled.section`
  position: relative;
  background-color: ${primaryColor};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 100px 50px;
  margin-top: -20px;
  border-radius: 10px 10px 0 0;
  max-width: 1200px;
`

const StyledBrandImage = styled.img`
  position: absolute;
  top: -100px;
  left: calc(50%-100px);
  width: 200px;
`

const StyledArticleTwo = styled.article`
  display: flex;
  flex-direction: row;
  max-width: 100vw;
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

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    maxWidth: 650,
    background: "rgba(36, 34, 34, 1)",
    margin: theme.spacing(4),
    padding: theme.spacing(4),
    textAlign: "center",
    borderRadius: "5px",
  },
  cardHeader: {
    color: theme.palette.text.primary,
  },
  cardContent: {
    color: theme.palette.text.primary,
  },
  cardAction: {
    display: "flex",
    justifyContent: "center",
  },
}))

const content = [
  {
    icon: "campfire",
    title: "Blazing Fast Speeds",
    content:
      "We optimize and opt for the fastest frameworks to make sure your site is as fast as possible. Users wait 3 seconds on average for your site. Do you have what it takes?",
  },
  {
    icon: "spring",
    title: "Flexible",
    content:
      "Minimal framework and limiting platforms so you can scale and build your site your way. Flexible enough to add login functionality or even ecommerce within your site. Adding plugins to your favorite CMS is a breeze",
  },
  {
    icon: "frogIcon",
    title: "Branded",
    content:
      "Minimal and simple colors, and logos are our bread and butter. We give you a page with focused branding and minimal clutter. We use an expert photographer for an even more specialized branding experience.",
  },
]

const SectionTwo = () => {
  const classes = useStyles()
  return (
    <>
      <StyledSectionTwo>
        <BrandSvg style={{ marginTop: "-175px" }} />
        <StyledArticleTwo>
          {content.map(cardInfo => (
            <CardWrapper>
              <IconImage src={cardInfo.icon}></IconImage>
              {(() => {
                switch (cardInfo.icon) {
                  case 'campfire'
                  default:
                    return null
                }
              })()}
              <Box overflow="visible" className={classes.card}>
                <CardHeader
                  className={classes.cardHeader}
                  title={cardInfo.title}
                ></CardHeader>
                <CardContent>
                  <Typography
                    className={classes.cardContent}
                    variant="h6"
                    gutterBottom
                  >
                    {cardInfo.content}
                  </Typography>
                </CardContent>
                <CardActions className={classes.cardAction}>
                  <Link style={{ textDecoration: "none" }} to="/get-started">
                    <Button
                      className={classes.button}
                      component="p"
                      variant="outlined"
                      color="primary"
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardActions>
              </Box>
            </CardWrapper>
          ))}
        </StyledArticleTwo>
      </StyledSectionTwo>
    </>
  )
}

export default SectionTwo
