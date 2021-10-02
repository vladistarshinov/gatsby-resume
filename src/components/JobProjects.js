import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Projects from "./Projects"

const query = graphql`
  {
    allStrapiProjects(filter: {isJobProject: {eq: true}}) {
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
        position {
          id
          role
        }
        company
      }
    }
  }
`

const JobProjects = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiProjects: { nodes: projects }
  } = data

  return (
    <>
      <Projects projects={projects} title="Рабочие проекты"/>
    </>
  )
}

export default JobProjects
