import * as React from "react"
import { Link } from "gatsby"
import { createTheme, ThemeProvider } from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
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
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage
