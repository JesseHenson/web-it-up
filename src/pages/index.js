import React from "react"
import SectionOne from "../Components/sectionOne"
import HeaderComponent from "../Components/header"
import Hero from "../Components/hero"
import SectionTwo from "../Components/sectionTwo"
import Footer from "../Components/footer"
import Layout from "../Components/layout"

const Index = () => {
  return (
    <Layout>
      <Hero />
      <SectionOne />
      <SectionTwo />
    </Layout>
  )
}

export default Index
