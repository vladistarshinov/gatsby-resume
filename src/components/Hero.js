import React, { useState, useEffect } from "react";
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

const useStyles = makeStyles((theme) => ({
  // https://images.unsplash.com/photo-1595520519880-a86c48ea536c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80
  section: {
    height: "90vh",
  },
  content: {
    height: "100vh",
    zIndex: 100,
    position: "relative",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.25)",
    height: "100vh",
    width: "100vw",
    position: "absolute",
    zIndex: 3,
  },
  heroImg: {
    height: "100vh",
    width: "100vw",
    zIndex: 1,
  },
}))

const Hero = () => {
  const classes = useStyles()

  const [show, setShow] = useState(false)
  useEffect(() => 
    setShow(true)
    , [])

  return (
    <Paper className={classes.section}>
      <StaticImage
        className={classes.heroImg}
        src="https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1512&q=80"
        alt=""
        style={{ position: "absolute" }}
      />
      <div className={classes.overlay}></div>
      <Container style={{ height: "100%" }} maxWidth="lg">
        <Grid className={classes.content} container justifyContent="space-between" alignItems="center">
          <Hidden xsDown>
            <Grid item>
              <Typography variant="h5">developer</Typography>
            </Grid>
          </Hidden>
          <Zoom in={show}>
            <Grid item sm={8}>
              <Typography component="h1" variant="h3">Vladislav Starshinov</Typography>
              <Typography variant="h5">Web developer</Typography>
              <Box my={3}>
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