import React from "react"
import { Link } from "gatsby"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import { makeStyles } from "@material-ui/core/styles"


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


const useStyles = makeStyles(() => ({
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
}))


const NavLinks = () => {
  const classes = useStyles()
  return (
    <>
      {navigationLinks.map(item => 
        <ListItem key={item.id}>
          <Link
            className={classes.link}
            color="textPrimary"
            variant="button"
            underline="none"
            to={item.href}
          >
            {item.name}
          </Link>
        </ListItem>
      )}
    </>
  )
}


export default ({ styleClass }) => {
  return (
    <List className={`${styleClass ? styleClass : ""}`}>
      <NavLinks />
    </List>
  )
}