import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../Components/layout"
import {
  primaryColor,
  backgroundColor,
  backgroundText,
} from "../Components/styledConstants"
import Mountains from "../Components/GatsbyImageComps/mountains"
import Fire from "../Components/GatsbyImageComps/fire"

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
  grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
`

const PostCard = styled.article`
  background-color: ${backgroundText};
  padding: 2rem;
  border-radius: 10px;
`

const FeaturedCard = styled(PostCard)`
    position: relative;
  grid-column: ${props =>
    props.main
      ? "1 / 7"
      : props.cardNumber === 0
      ? "7 / 10"
      : props.cardNumber === 1
      ? "10 / 13"
      : props.cardNumber === 2
      ? "7 / 10"
      : props.cardNumber === 3
      ? "10 / 13"
      : "1"};
  grid-row: ${props =>
    props.main
      ? "1 / 13"
      : props.cardNumber === 0
      ? "1 / 9"
      : props.cardNumber === 1
      ? "1 / 4"
      : props.cardNumber === 2
      ? "9 / 13"
      : props.cardNumber === 3
      ? "4 / 13"
      : 1};

  /* grid-row: ${props => (props.main ? "1 / 13" : "1/2")}; */
`

const CardBackgroundImage = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 10px;
  top: 0;
  left: 0;
`

const BlogHeading = styled.h1`
  color: ${primaryColor};
  margin-top: 6rem;
`

const CardDisplayCase = styled.div`
  height: 30%;
  width: 100%;
  position: absolute;
  background-color: ${backgroundColor};
  border-radius: 0 0 10px 10px;
  bottom: 0;
  left: 0;
  z-index: 9999;
`

const StoryTitle = styled.p`
  font-size: 1.3rem;
  color: ${backgroundText};
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  z-index: 9999;
`

const FeaturedStoryTitle = styled(StoryTitle)`
  font-font: 1.5rem;
`

const StoryAbstract = styled.p`
  color: ${backgroundText};
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  z-index: 9999;
`

const Divider = styled.hr`
  margin-top: 4rem;
  margin-bottom: 4rem;
  width: 80%;
  color: ${backgroundText};
`

const Blog = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <BlogWrapper>
        <BlogHeading>{data.allMarkdownRemark.totalCount} Posts</BlogHeading>
        <FeaturedContainer>
          {data.allMarkdownRemark.edges
            .filter(({ node }) => node.frontmatter.main)
            .map(({ node }) => {
              return (
                <FeaturedCard main={node.frontmatter.main}>
                  <Mountains />
                  <CardDisplayCase>
                    <Link to={node.fields.slug}>
                      <StoryTitle>
                        {node.frontmatter.title}{" "}
                        <span>— {node.frontmatter.date}</span>
                      </StoryTitle>
                      <StoryAbstract>{node.excerpt}</StoryAbstract>
                    </Link>
                  </CardDisplayCase>
                </FeaturedCard>
              )
            })}
          {data.allMarkdownRemark.edges
            .filter(({ node }) => node.frontmatter.featured)
            .map(({ node }, index) => {
              return (
                <FeaturedCard cardNumber={index}>
                  <Fire />
                  <CardDisplayCase>
                    <Link to={node.fields.slug}>
                      <FeaturedStoryTitle>
                        {node.frontmatter.title}{" "}
                      </FeaturedStoryTitle>
                    </Link>
                  </CardDisplayCase>
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
