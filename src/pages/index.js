import React from "react"
import SectionOne from "../Components/sectionOne"
import SectionTwo from "../Components/sectionTwo"
import Layout from "../Components/layout"
import StyledBackgroundSection from "../Components/backgroundSection"
import HeroCard from "../Components/hero-card"

const Index = ({ data }) => {
  return (
    <Layout>
      <StyledBackgroundSection>
        <HeroCard />
      </StyledBackgroundSection>
      <SectionOne />
      <SectionTwo cardInfo={data.allContentfulCardInfo.edges} />
    </Layout>
  )
}

export const indexQuery = graphql`
  query IndexQuery {
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
          letter
        }
      }
    }
  }
`

export default Index
