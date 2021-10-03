import * as React from "react"
import { graphql } from "gatsby"
import { createTheme, ThemeProvider } from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import Title from "../components/Title"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Image from "gatsby-image"

const darkTheme = createTheme({
  palette: {
    type: "dark"
  }
})

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "3rem 0",
    height: "90vh",
    [theme.breakpoints.down('md')]: {
      height: "100vh"
    },
  },
  about: {
    backgroundImage: "url(https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1512&q=80)",
    backgroundSize: "cover",
    backgroundPositionY: "-100px",
    maxWidth: "100vw"
  },
  about_center: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    alignItems: "center",
    columnGap: "4rem",
    [theme.breakpoints.down('md')]: {
      display: "block",
    },
  },
  about__img: {
    gridColumn: "1 / span 5",
    marginBottom: 0,
    marginLeft: 50,
    [theme.breakpoints.down('md')]: {
      display: "none"
    },
  },
  about__desc: {
    gridColumn: "6 / -2",
    textAlign: "center",
    fontSize: "16px",
    [theme.breakpoints.down('md')]: {
      marginBottom: "2rem",
      textAlign: "center",
      lineHeight: 2,
      padding: "0 4rem",
      width: "100vw"
    },
  }
}))

export const query = graphql`
  {
    about:allStrapiAbout {
      nodes {
        title
        desc
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const About = ({data: {about: {nodes}}}) => {
  const classes = useStyles()
  const {title, desc, image } = nodes[0]
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout withoutFooter>
        <CssBaseline />
        <Box className={`${classes.section} ${classes.about}`}>
          <Box className={classes.about_center}>
            <Image className={classes.about__img} fluid={image.childImageSharp.fluid}></Image>
            <Box className={classes.about__desc}>
              <Title title={title}></Title>
              <Typography>{desc}</Typography>
            </Box>
          </Box>
        </Box>
      </Layout>
    </ThemeProvider>
  )
}

export default About
