import React from "react"
import { graphql } from "gatsby"
import Layout from "../Components/layout"
import ArticlePreview from "../Components/article-preview"
import { Grid, makeStyles, GridList, GridListTile } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {},
}))

const BlogIndex = ({ location, data }) => {
  const posts = data.allContentfulBlogPost.edges
  const classes = useStyles()
  return (
    <Layout location={location}>
      <div>Blog</div>
      <h2>Recent articles</h2>
      <div className={classes.root}>
        <GridList
          spacing="200"
          cellHeight="auto"
          className={classes.gridList}
          cols={3}
        >
          {posts.map(tile => (
            <ArticlePreview article={tile} />
          ))}
        </GridList>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
