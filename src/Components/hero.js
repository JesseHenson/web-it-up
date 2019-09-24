import React from "react"
import styled from "styled-components"
import fireImage from "../images/Twisted-Fire.png"
import HeroMessage from "./heroMessage"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Parallax = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow-x: hidden;
`

const ParaImage = styled(Img)`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      fireImage: file(relativePath: { eq: "Twisted-Fire.png" }) {
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
      <ParaImage style={{ position: "absolute" }} fluid={data.fireImage.childImageSharp.fluid} />
      <HeroMessage></HeroMessage>
    </Parallax>
  )
}
