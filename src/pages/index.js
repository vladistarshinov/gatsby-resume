import * as React from "react"
import { Link } from "gatsby"
import { createTheme, ThemeProvider } from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import SEO from "../components/SEO"

const darkTheme = createTheme({
  palette: {
    type: "dark"
  }
})

const IndexPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <CssBaseline />
        <Hero />
        <Services />
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage
