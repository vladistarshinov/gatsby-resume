import React, { useState } from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/ToolBar"
import Container from "@material-ui/core/Container"
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import Divider from "@material-ui/core/Divider"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import logo from "../images/header-logo.svg"
import { StaticImage } from "gatsby-plugin-image"
import NavLinks from "../constants/navLinks"

const useStyles = makeStyles(() => ({
  avatar: {
    marginRight: "auto",
    height: 45,
  },
  links: {
    display: "inline-flex", 
    justifyContent: "center"
  }
}))

const Header = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  return (
    <AppBar style={{ height: "6vh", background: "#080512", display: "flex", alignItems: "center" }}>
      <Container maxWidth="lg">
        <ToolBar disableGutters>
          <img className={classes.avatar} src={logo} alt="logo" />
          <Hidden xsDown>
            <NavLinks styleClass={classes.links}></NavLinks>
          </Hidden>
          <Hidden smUp>
            <IconButton>
              <MenuIcon onClick={() => setOpen(true)} />
            </IconButton>
          </Hidden>
        </ToolBar>
      </Container>
      <SwipeableDrawer
        anchor="right"
        style={{ color: "#fff" }}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div>
          <IconButton>
            <ChevronRightIcon onClick={() => setOpen(false)} />
          </IconButton>
        </div>
        <Divider />
        <NavLinks></NavLinks>
      </SwipeableDrawer>
    </AppBar>
  )
}


export default Header
