import React from "react"
import { Link } from "gatsby"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import { makeStyles } from "@material-ui/core/styles"
import {
  FaFacebookSquare,
  FaVk,
  FaInstagramSquare,
  FaTelegram,
} from "react-icons/fa"

const socialIconsLinks = [
  {
    id: 1,
    icon: <FaVk className="social-icon"></FaVk>,
    href: "https://vk.com/vladistarshinov",
  },
  {
    id: 2,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    href: "https://www.facebook.com/vladistarshinov",
  },
  {
    id: 3,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    href: "https://www.instagram.com/vladistarshinov",
  },
  {
    id: 4,
    icon: <FaTelegram className="social-icon"></FaTelegram>,
    href: "https://t.me/vladistarshinov",
  },
]


const useStyles = makeStyles(() => ({
  link: {
    marginRight: 20,
    color: "#fff",
    textDecoration: "none",
    transition: "0.5s",
    fontSize: "26px",
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
      {socialIconsLinks.map(item => 
        <ListItem key={item.id}>
          <Link
            className={classes.link}
            color="textPrimary"
            variant="button"
            underline="none"
            to={item.href}
          >
            {item.icon}
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