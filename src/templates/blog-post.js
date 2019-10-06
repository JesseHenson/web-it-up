import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Img from "gatsby-image"
import Layout from "../Components/layout"
import { makeStyles, ThemeProvider } from "@material-ui/styles"
import { createMuiTheme } from "@material-ui/core"
import { deepOrange } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: { primary: deepOrange },
})

const useStyles = makeStyles(theme => ({
  button: {},
}))

const BlogPostTemplate = props => {
  const classes = useStyles()
  const post = props.data.contentfulBlogPost
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <ThemeProvider theme={theme}>
      <Layout location={props.location}>
        <div>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div>
            <Img alt={post.title} fluid={post.heroImage.fluid} />
          </div>
          <div>
            <h1>{post.title}</h1>
            <p
              style={{
                display: "block",
              }}
            >
              {post.publishDate}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
