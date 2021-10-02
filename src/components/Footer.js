import React from "react"
import { makeStyles, Typography } from "@material-ui/core"
import SocialLinks from "../constants/socialLinks"
import Box from "@material-ui/core/Box"
import logo from "../images/header-logo.svg"

const useStyles = makeStyles(() => ({
  footer: {
    height: "8rem",
    background: "#080512",
    textAlign: "center",
    display: "grid",
    placeItems: "center"
  }, 
  footer__links: {
    margin: "0 auto 0.5rem auto",
    display: "flex",
    justifyContent: "center"
  }
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Box>
        <SocialLinks styleClass={classes.footer__links} />
        <Box display="inline-flex" alignItems="center">
          <img className={classes.avatar} src={logo} alt="logo" />
          <Typography style={{ marginLeft: "20px" }} variant="body1">copyright&copy;{new Date().getFullYear()}</Typography>
        </Box>
      </Box>
    </footer>
  )
}

export default Footer
