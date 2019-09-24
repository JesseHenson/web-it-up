import React from "react"
import "./layout.css"

import HeaderComponent from "./Header"
import Footer from "./footer"

export default ({ children }) => (
  <>
    <HeaderComponent />
    <main>{children} </main>
    <Footer />
  </>
)
