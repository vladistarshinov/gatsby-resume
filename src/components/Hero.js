import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
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
    height: "90vh",
  },
  hero: {
    backgroundImage: "url(https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1512&q=80)",
    backgroundSize: "cover",
    backgroundPositionY: "-100px"
  },
  content: {
    zIndex: 100,
    position: "relative",
    paddingTop: "100px",
    [theme.breakpoints.down('sm')]: {
      paddingTop: "10px",
    },
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.25)",
    height: "90vh",
    position: "absolute",
    zIndex: 3,
  },
  img: {
    height: "90vh",
    width: "100vw",
    zIndex: 1,
  },
  wrapper__img: {
    [theme.breakpoints.down('sm')]: {
      display: "inline-flex",
      justifyContent: "center"
    },
  },
  heroImg: {
    height: "260px",
    width: "300px",
    [theme.breakpoints.down('sm')]: {
      marginBottom: "30px"
    },
  },
  desc: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      fontSize: "28px"
    },
  },
  underline: {
    height: "0.25rem",
    margin: "1rem 0",
    background: "#E2B979",
    //marginLeft: "auto",
    textAlign: "center",
    [theme.breakpoints.down('sm')]: {
      marginLeft: "auto",
    },
  },
  center_btn: {
    display: "block",
    width: "10rem",
    textAlign: "center",
    margin: "0 auto",
    padding: "0.5rem 0",
    color: "#fff",
    textDecoration: "none",
    border: "1px solid #fff",
    borderRadius: "20px",
    transition: "all 0.3s linear",
    "&:hover": {
      border: "2px solid #E2B979",
      color: "#E2B979"
    }
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
    <Paper className={`${classes.section} ${classes.hero}`}>
      <Box className={classes.overlay}></Box>
      <Container style={{ height: "100%" }} maxWidth="md">
        <Grid className={classes.content} container display="flex" justifyContent="space-between" alignItems="center">
            <Grid item display="inline-flex" justifyContent="center" className={classes.wrapper__img}>
              <Image fluid={fluid} className={classes.heroImg} />
            </Grid>
          <Zoom in={show} style={{ margin: "0 auto" }}>
            <Grid item sm={6}>
              <Typography className={`${classes.desc} ${classes.title}`} component="h1" variant="h4">Владислав Старшинов</Typography>
              <Box className={classes.underline}></Box>
              <Typography className={classes.desc} variant="body2">Веб-разработчик</Typography>
              <Box my={3} className={classes.desc}>
                <Link to="/about/" className={classes.center_btn}>Подробнее</Link>
              </Box>
            </Grid>
          </Zoom>
        </Grid>
      </Container>
    </Paper>
  )
}

export default Hero