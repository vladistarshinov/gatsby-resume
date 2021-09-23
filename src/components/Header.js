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
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import logo from "../images/header-logo.svg"
import { StaticImage } from "gatsby-plugin-image"

const navigationLinks = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About",
    href: "/about/",
  },
  {
    id: 3,
    name: "Projects",
    href: "/projects/",
  },
  {
    id: 4,
    name: "Blog",
    href: "/blog/",
  },
  {
    id: 5,
    name: "Contact",
    href: "/contact/",
  },
]

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
    color: "#fff",
    textDecoration: "none",
    transition: "0.5s",
    fontSize: "16px",
    "&:hover": {
      color: "#E2B979",
      opacity: "1",
    },
    "&:focus": {
      boxShadow: "0px 2px #E2B979"
    }
  },
  avatar: {
    marginRight: "auto",
    height: 45,
  },
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
            {navigationLinks.map((item) => (
              <Link
                className={classes.link}
                color="textPrimary"
                variant="button"
                underline="none"
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
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
        <List>
          {navigationLinks.map((item) => (
            <ListItem>
              <Link
                className={classes.link}
                color="textPrimary"
                variant="button"
                underline="none"
                href={item.href}
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  )
}


export default Header
