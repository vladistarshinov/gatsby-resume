import React, { useState } from "react"
import { Link } from "gatsby"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import { makeStyles } from "@material-ui/core/styles"


const navigationLinks = [
  {
    id: 1,
    name: "Главная",
    href: "/",
  },
  {
    id: 2,
    name: "Обо мне",
    href: "/about/",
  },
  {
    id: 3,
    name: "Портфолио",
    href: "/portfolio/",
  },
  {
    id: 4,
    name: "Блог",
    href: "/blog/",
  },
  {
    id: 5,
    name: "Контакты",
    href: "/contact/",
  },
]


const useStyles = makeStyles(() => ({
  link: {
    marginRight: 20,
    color: "#fff",
    width: "70px",
    textAlign: "center",
    textDecoration: "none",
    transition: "0.5s",
    fontSize: "14px",
    "&:hover": {
      color: "#E2B979",
      opacity: "1",
    },
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