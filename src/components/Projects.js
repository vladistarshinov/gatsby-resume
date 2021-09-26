import React from 'react'
import { Link } from "gatsby"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Title from "./Title"
import Image from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa'

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "3rem 0",
  },
  projects: {
    background: "#082340"
  },
  projects_center: {
    width: "80vw",
    margin: "0 auto",
    maxWidth: "1170px",
    [theme.breakpoints.up('md')]: {
      width: "90vw",
      display: "grid",
      gridTemplateColumns: "1fr",
      columnGap: "4rem"
    }
  },
  project: {
    display: "grid",
    marginBottom: "4rem",
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: "repeat(12, 1fr)",
      alignItems: "center",
      "&:nth-of-type(even)": {
        "& .project__img": {
          gridColumn: "5 / -1",
          gridRow: "1 / 1",
        },
        "& .project__info": {
          gridColumn: "2 / span 7",
          gridRow: "1 / 1",
          textAlign: "left"
        },
      }
    },
  },
  project__img: {
    borderTopLeftRadius: "0.25rem",
    borderTopRightRadius: "0.25rem",
    zIndex: "1",
    "&::after": {
      content: "",
      position: "absolute",
      top: 0,
      left: 0,
      width: "400px",
      height: "400px",
      background: "linear-gradient(to bottom right, #000, #222)",
      opacity: "0.85",
      transition: "all 0.3s linear",
    },
    [theme.breakpoints.up('md')]: {
      opacity: ".3",
      gridColumn: "1 / span 8",
      gridRow: "1 / 1",
      height: "30rem",
      borderRadius: "0.25rem",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
      transition: "all 0.3s linear",
      "&:hover": {
        opacity: 1
      },
    },
  },
  project__info: {
    background: "#fff",
    padding: "1rem 2rem",
    borderBottomLeftRadius: "0.25rem",
    borderBottomRightRadius: "0.25rem",
    [theme.breakpoints.up('md')]: {
      gridColumn: "5 /12",
      gridRow: "1 / 1",
      zIndex: 1,
      borderRadius: "0.25rem",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    },
  },
  project__number: {
    display: "inline-block",
    fontSize: "1.25rem",
    color: "#E2B979",
    marginBottom: "0.75rem"
  },
  project__title: {
    fontWeight: 500,
    color: "#000",
    marginBottom: "1.5rem",
    fontSize: "1.5rem"
  },
  project__desc: {
    wordSpacing: "15px",
    color: "grey"
  },
  project__tags: {
    marginBottom: "1rem"
  },
  project__tags_title: {
    display: "inline-block",
    background: "#E2B979",
    color: "#000",
    marginRight: "0.5rem",
    padding: "0.25rem",
    margin: "0.25rem 0.5rem",
    borderRadius: "0.25rem",
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontSize: "0.85rem"
  },
  project__icon: {
    color: "#2caeba",
    fontSize: "1.25rem",
    marginRight: "0.5rem",
    transition: "all 0.3s linear",
    "&:hover": {
      color: "hsl(184, 91%, 17%)"
    }
  }

}))


const Projects = ({projects, title}) => {
  const classes = useStyles()
  
  return (
    <Box className={`${classes.section} ${classes.projects}`}>
      <Title title={title} />
      <Box className={classes.projects_center}>
        {projects.map((project, idx) => {
          const {id, description, title, githubUrl, tag, url, image} = project
          return (
            <Box key={id} className={classes.project}>
              <Image className={classes.project__img} fluid={image.childImageSharp.fluid} />
              <Box className={classes.project__info}>
                <Box className={classes.project__number}>{idx + 1}</Box>
                <Typography variant="h5" className={classes.project__title}>{title}</Typography>
                <Typography variant="body2" className={classes.project__desc}>{description}</Typography>
                <Box className={classes.project__tags}>
                  {tag.map(item => {
                    return (
                      <span key={item.id} className={classes.project__tags_title}>{item.title}</span>
                    )
                  })}
                </Box>
                <Box className={classes.project__links}>
                  <Link href={githubUrl}>
                    <FaGithubSquare className={classes.project__icon} />
                  </Link>
                  <Link href={url}>
                    <FaShareSquare className={classes.project__icon} />
                  </Link>
                </Box>
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default Projects
