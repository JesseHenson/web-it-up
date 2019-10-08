import React from "react"
import styled from "styled-components"
import {
  backgroundColor,
  primaryColor,
  backgroundText,
} from "./styledConstants"
import BrandSvg from "../Components/brandSvg"
import Img from "gatsby-image"
import {
  Box,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
  CardHeader,
  Container,
} from "@material-ui/core"
import { Link } from "gatsby"

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

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    maxWidth: 650,
    height: "100%",
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
  imageWrapper: {
    width: 50,
    height: 50,
  },
  article: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  sectionContainer: {
    position: "relative",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: "100px 50px",
    marginTop: "-20px",
    borderRadius: "10px 10px 0 0",
    maxWidth: "100%",
  },
}))

const SectionTwo = ({ cardInfo }) => {
  // console.log(cardInfo[0].node.icon)
  const classes = useStyles()
  return (
    <>
      <Container className={classes.sectionContainer}>
        <BrandSvg style={{ marginTop: "-175px" }} />
        <Box className={classes.article}>
          {cardInfo.map(card => {
            return (
              <CardWrapper>
                <Box className={classes.imageWrapper}>
                  <Img fluid={card.node.icon.fluid} />
                </Box>
                <Box className={classes.card}>
                  <CardHeader
                    className={classes.cardHeader}
                    title={card.node.title}
                  ></CardHeader>
                  <CardContent>
                    <Typography
                      className={classes.cardContent}
                      variant="h6"
                      gutterBottom
                    >
                      {card.node.content.content}
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
            )
          })}
        </Box>
      </Container>
    </>
  )
}

export default SectionTwo
