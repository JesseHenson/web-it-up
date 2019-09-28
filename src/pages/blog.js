import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"

import Layout from "../Components/layout"
import {
  primaryColor,
  backgroundColor,
  backgroundText,
} from "../Components/styledConstants"

const BlogWrapper = styled.div`
  padding: 2rem;
`

const StoryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
  justify-content: center;
  margin-bottom: 2rem;
`

const FeaturedContainer = styled(StoryContainer)`
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(auto-fit, minmax(250px, 1fr));
`

const PostCard = styled.article`
  background-color: ${backgroundText};
  padding: 2rem;
  border-radius: 10px;
`

const FeaturedCard = styled(PostCard)`
  grid-column: ${props =>
    props.main ? "1 / 6" : props.cardNumber % 2 == 0 ? "6 / 9" : "9 / 12"};
  grid-row: ${props =>
    props.main ? "1 / 13" : props.cardNumber % 2 !== 0 ? "1 / 7" : "8 / 13"};
  

  /* grid-row: ${props => (props.main ? "1 / 13" : "1/2")}; */
`

const BlogHeading = styled.h1`
  color: ${primaryColor};
  margin-top: 6rem;
`

const StoryTitle = styled.h3`
  color: ${backgroundColor};
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

const StoryAbstract = styled.p`
  color: ${backgroundColor};
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

const Divider = styled.hr`
  margin-top: 4rem;
  margin-bottom: 4rem;
  width: 80%;
  color: ${backgroundText};
`

const Blog = ({ data }) => {
  return (
    <Layout>
      <BlogWrapper>
        <BlogHeading>{data.allMarkdownRemark.totalCount} Posts</BlogHeading>
        <FeaturedContainer>
          {data.allMarkdownRemark.edges
            .filter(({ node }) => node.frontmatter.main)
            .map(({ node }) => {
              console.log(node.frontmatter.main)

              return (
                <FeaturedCard main={node.frontmatter.main}>
                  <Link to={node.fields.slug}>
                    <StoryTitle>
                      {node.frontmatter.title}{" "}
                      <span>— {node.frontmatter.date}</span>
                    </StoryTitle>
                    <StoryAbstract>{node.excerpt}</StoryAbstract>
                  </Link>
                </FeaturedCard>
              )
            })}
          {data.allMarkdownRemark.edges
            .filter(({ node }) => node.frontmatter.featured)
            .map(({ node }, index) => {
              console.log(node.frontmatter.main)

              return (
                <FeaturedCard main={node.frontmatter.main} cardNumber={index}>
                  <Link to={node.fields.slug}>
                    <StoryTitle>
                      {node.frontmatter.title}{" "}
                      <span>— {node.frontmatter.date}</span>
                    </StoryTitle>
                    <StoryAbstract>{node.excerpt}</StoryAbstract>
                  </Link>
                </FeaturedCard>
              )
            })}
        </FeaturedContainer>
        <Divider />
        <StoryContainer>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <PostCard key={node.id}>
              <Link to={node.fields.slug}>
                <StoryTitle>
                  {node.frontmatter.title}{" "}
                  <span>— {node.frontmatter.date}</span>
                </StoryTitle>
                <StoryAbstract>{node.excerpt}</StoryAbstract>
              </Link>
            </PostCard>
          ))}
        </StoryContainer>
      </BlogWrapper>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            featured
            main
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default Blog
