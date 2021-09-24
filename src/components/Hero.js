import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Box from "@material-ui/core/Box"
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Zoom from "@material-ui/core/Zoom"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { StaticImage } from "gatsby-plugin-image"
import Hidden from "@material-ui/core/Hidden"
import Image from "gatsby-image"

const useStyles = makeStyles((theme) => ({
  section: {
    height: "100vh",
  },
  content: {
    zIndex: 100,
    position: "relative",
    paddingTop: "100px"
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.25)",
    height: "100vh",
    width: "100vw",
    position: "absolute",
    zIndex: 3,
  },
  img: {
    height: "100vh",
    width: "100vw",
    zIndex: 1,
  },
  heroImg: {
    height: "260px",
    width: "300px",
    [theme.breakpoints.down('sm')]: {
      height: "210px",
      width: "250px",
    },
  },
  desc: {
    [theme.breakpoints.down('sm')]: {
      display: "flex",
      justifyContent: "center"
    },
  },
  underline: {
    width: "5rem",
    height: "0.25rem",
    marginBottom: "1.25rem",
    background: "#E2B979",
    //marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down('sm')]: {
      marginLeft: "auto",
    },
  }
}))

const query = graphql`
  {
    file(relativePath: {eq: "hero-photo.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const classes = useStyles()
  const {
    file: {
      childImageSharp: { fluid }
    }
  } = useStaticQuery(query)
  const [show, setShow] = useState(false)
  useEffect(() => 
    setShow(true)
    , [])

  return (
    <Paper className={classes.section}>
      <StaticImage
        className={classes.img}
        src="https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1512&q=80"
        alt=""
        style={{ position: "absolute" }}
      />
      <Box className={classes.overlay}></Box>
      <Container style={{ height: "100%" }} maxWidth="md">
        <Grid className={classes.content} container display="flex" justifyContent="space-between" alignItems="center">
          <Hidden xsDown>
            <Grid item>
              <Image fluid={fluid} className={classes.heroImg} />
            </Grid>
          </Hidden>
          <Zoom in={show} style={{ margin: "0 auto" }}>
            <Grid item sm={6}>
              <Box className={classes.underline}></Box>
              <Typography className={classes.desc} component="h1" variant="h4">Vladislav Starshinov</Typography>
              <Typography className={classes.desc} variant="body2">Web developer</Typography>
              <Box my={3} className={classes.desc}>
                <Button variant="outlined" style={{ color: "#E2B979" }}>Write me</Button>
              </Box>
            </Grid>
          </Zoom>
        </Grid>
      </Container>
    </Paper>
  )
}

export default Hero