import React from "react"
import { graphql } from "gatsby"
import Layout from "../Components/layout"
import ArticlePreview from "../Components/article-preview"
import { Grid, makeStyles, Container } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(5),
  },
}))

const BlogIndex = ({ location, data }) => {
  const posts = data.allContentfulBlogPost.edges
  const classes = useStyles()
  return (
    <Layout location={location}>
      <div className={classes.root}>
        <Container>
          <Grid container spacing={4}>
            {posts.map(tile => (
              <Grid item xs={12} md={6}>
                <ArticlePreview article={tile} />
              </Grid>
            ))}
          </Grid>
        </Container>
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
