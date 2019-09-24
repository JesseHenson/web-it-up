import React from "react"
import "./layout.css"

import HeaderComponent from "./header"
import Footer from "./footer"

export default ({ children }) => (
  <>
    <HeaderComponent />
    <main>{children} </main>
    <Footer />
  </>
)
