import * as React from "react"
import { Link } from "gatsby"
import { createTheme, ThemeProvider } from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Education from "../components/Education"
import Jobs from "../components/Jobs"
import JobProjects from "../components/JobProjects"
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
        <Jobs />
        <JobProjects />
        <Education />
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage
