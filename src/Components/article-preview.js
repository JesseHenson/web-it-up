import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import {
  Card,
  makeStyles,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@material-ui/core"
import ShareIcon from "@material-ui/icons/Share"

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: theme.palette.common.black,
    height: "100%",
  },
  title: {
    fontSize: 14,
    color: theme.palette.common.black,
  },
  link: {
    color: theme.palette.common.white,
    textDecoration: "none",
  },
}))

export default ({ article }) => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link className={classes.link} to={`/blog/${article.node.slug}`}>
          <Img fluid={article.node.heroImage.fluid} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {article.node.title}
            </Typography>
            {/* </CardContent>
      <CardContent> */}
            <Typography
              dangerouslySetInnerHTML={{
                __html: article.node.description.childMarkdownRemark.html,
              }}
              variant="body2"
              component="p"
            ></Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <ShareIcon />
        </Button>
      </CardActions>
    </Card>
  )
}
