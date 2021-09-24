import React from "react"
import Box from "@material-ui/core/Box"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  section__title: {
    marginBottom: "4rem",
    textAlign: "center",
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
      <h2>{title}</h2>
      <div className={classes.underline}></div>
    </Box>
  )
}

export default Title