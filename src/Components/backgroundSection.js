import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className, children }) => {
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
  const [image, setImage] = React.useState(data.fireImage.childImageSharp.fluid)

  const changeImage = x => {
    console.log(x)
    if (x.matches) {
      console.log("smaller than 700")
      setImage(data.fireWeed.childImageSharp.fluid)
    } else {
      console.log("larger than 700")
      setImage(data.fireImage.childImageSharp.fluid)
    }
  }
  React.useEffect(() => {
    const x = window.matchMedia("(max-width: 700px)")
    x.addListener(changeImage)
    return x.addListener(changeImage)
  }, [])

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={image}
      backgroundColor={`#040e18`}
    >
      {children}
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 100vh;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default StyledBackgroundSection
