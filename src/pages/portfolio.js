import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Projects from "../components/Projects"
import Layout from "../components/Layout"
import { createTheme, ThemeProvider } from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline"

const darkTheme = createTheme({
  palette: {
    type: "dark"
  }
})

const query = graphql`
  {
    allStrapiProjects(filter: {isJobProject: {eq: false}}) {
      nodes {
        id
        title
        description
        githubUrl
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tag {
          id
          title
        }
      }
    }
  }
`

const PortfolioPage = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiProjects: { nodes: projects }
  } = data
  
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <CssBaseline />
        <Projects projects={projects} title="Портфолио"></Projects>
      </Layout>
    </ThemeProvider>
  )
}

export default PortfolioPage
