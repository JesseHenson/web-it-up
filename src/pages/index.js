import React from "react"
import SectionOne from "../Components/sectionOne"
import Hero from "../Components/hero"
import SectionTwo from "../Components/sectionTwo"
import Layout from "../Components/layout"
import HeroMessage from "../Components/heroMessage"

const Index = () => {
  return (
    <Layout>
      <Hero>
        <HeroMessage></HeroMessage>
      </Hero>
      <SectionOne />
      <SectionTwo />
    </Layout>
  )
}

export default Index
