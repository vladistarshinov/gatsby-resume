import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Projects from "./Projects"

const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
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

const Portfolio = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiProjects: { nodes: projects }
  } = data

  return (
    <>
      <Projects projects={projects} title="Проекты"/>
    </>
  )
}

export default Portfolio
