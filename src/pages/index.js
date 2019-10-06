import React from "react"
import SectionOne from "../Components/sectionOne"
import SectionTwo from "../Components/sectionTwo"
import Layout from "../Components/layout"
import StyledBackgroundSection from "../Components/backgroundSection"
import HeroCard from "../Components/hero-card"

const Index = () => {
  return (
    <Layout>
      <StyledBackgroundSection>
        <HeroCard />
      </StyledBackgroundSection>
      <SectionOne />
      <SectionTwo />
    </Layout>
  )
}

export default Index
