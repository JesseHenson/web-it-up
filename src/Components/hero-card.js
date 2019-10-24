import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"
import { Box } from "@material-ui/core"
import BrandSVG from "./brandSvg"

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    maxWidth: 650,
    background: "rgba(36, 34, 34, 0.6)",
    margin: theme.spacing(4),
    padding: theme.spacing(4),
    textAlign: "center",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "50%",
    alignItems: "center",
  },
  cardAction: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    fontSize: theme.typography.h1,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    background: theme.palette.background.default,
  },
  cardContent: {
    color: theme.palette.text.primary,
  },
}))

export default function HeroCard() {
  const classes = useStyles()

  return (
    <>
      <Box overflow="visible" className={classes.card}>
        <BrandSVG style={{ marginTop: "-100px" }} />
        <CardContent>
          <Typography className={classes.cardContent} variant="h4" gutterBottom>
            Set your website on Fire with blazing fast optimization
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
    </>
  )
}
