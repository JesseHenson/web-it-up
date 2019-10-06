import React from "react"
import { Link, graphql } from "gatsby"
import Helmet from "react-helmet"
import Layout from "../Components/layout"
import ArticlePreview from "../components/article-preview"

const BlogIndex = ({ location, data }) => {
  const posts = data.allContentfulBlogPost.edges

  return (
    <Layout location={location}>
      <ul>
        <Helmet title={data.site.siteMetadata.title} />
        <div>Blog</div>
        <ul>
          <h2>Recent articles</h2>
          <ul>
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              )
            })}
          </ul>
        </ul>
      </ul>
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
