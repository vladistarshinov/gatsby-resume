import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Projects from "../components/Projects"
import Layout from "../components/Layout"

const query = graphql`
  {
    allStrapiProjects {
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

const ProjectsPage = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiProjects: { nodes: projects }
  } = data
  
  return (
    <Layout>
      <Projects projects={projects} title="Все проекты"></Projects>
    </Layout>
  )
}

export default ProjectsPage
