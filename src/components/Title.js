import React from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  section__title: {
    marginBottom: "4rem",
    textAlign: "center",
  },
  title: {
    color: "#fff", 
    marginBottom: "10px"
  },
  underline: {
    width: "5rem",
    height: "0.25rem",
    marginBottom: "1.25rem",
    background: "#E2B979",
    marginLeft: "auto",
    marginRight: "auto",
  }
}))

const Title = ({ title }) => {
  const classes = useStyles()

  return (
    <Box className={classes.section__title}>
      <Typography variant="h5" className={classes.title}>{title}</Typography>
      <div className={classes.underline}></div>
    </Box>
  )
}

export default Title