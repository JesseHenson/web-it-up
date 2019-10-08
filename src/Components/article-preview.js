import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Card, makeStyles, Grid, GridListTile } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: theme.palette.background.default,
  },
  title: {
    fontSize: 14,
  },
  gridList: {
    width: "100%",
  },
}))

export default ({ article }) => {
  const classes = useStyles()
  return (
    <GridListTile key={article.img} cols={article.columns || 1}>
      <Img alt="" fluid={article.node.heroImage.fluid} />
      <h3>
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <small>{article.publishDate}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: article.node.description.childMarkdownRemark.html,
        }}
      />
      {article.node.tags.map(tag => (
        <p key={tag}>{tag}</p>
      ))}
    </GridListTile>
  )
}
