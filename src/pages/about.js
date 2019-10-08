import React from "react"
import Layout from "../Components/layout"
import SectionTwo from "../Components/sectionTwo"

const About = ({ data }) => {
  return (
    <Layout>
      <SectionTwo cardInfo={data.allContentfulCardInfo.edges} />
    </Layout>
  )
}

export const aboutQuery = graphql`
  query AboutQuery {
    allContentfulCardInfo {
      edges {
        node {
          title
          content {
            content
          }
          icon {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default About
