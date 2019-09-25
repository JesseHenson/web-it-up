import React from "react"
import styled from "styled-components"
import HeroMessage from "./heroMessage"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Parallax = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow-x: hidden;
`

const ParaImageLarge = styled(Img)`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`

const ParaImagSmall = styled(Img)`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      fireImage: file(relativePath: { eq: "Twisted-Fire.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fireWeed: file(relativePath: { eq: "flower-fire.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Parallax>
      <ParaImageLarge
        style={{ position: "absolute" }}
        fluid={data.fireImage.childImageSharp.fluid}
      />
      <ParaImagSmall
        style={{ position: "absolute" }}
        fluid={data.fireWeed.childImageSharp.fluid}
      />
      <HeroMessage></HeroMessage>
    </Parallax>
  )
}
