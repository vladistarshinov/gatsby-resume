import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children, withoutFooter }) => {

  return (
    <>
      <Header />
      {children}
      {!withoutFooter && <Footer />}
    </>
  )
}

export default Layout
