import React from "react"
import Box from "@material-ui/core/Box"
import Title from "./Title"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const data = [
  {
    id: 1,
    icon: <FaCode style={{ fontSize: "2rem", marginBottom: "1.5rem" }} />,
    title: "Web development",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 2,
    icon: <FaSketch style={{ fontSize: "2rem", marginBottom: "1.5rem" }} />,
    title: "Web design",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 3,
    icon: <FaAndroid style={{ fontSize: "2rem", marginBottom: "1.5rem" }} />,
    title: "App design",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
]

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "5rem 0"
  },
  underline: {
    width: "5rem",
    height: "0.25rem",
    marginBottom: "1.25rem",
    background: "#E2B979",
    marginLeft: "auto",
    marginRight: "auto"
  },
  service: {
    background: "rgba(f, f, f, 0.1)",
    padding: "3rem 1.5rem",
    marginBottom: "2rem",
    borderRadius: "0.25rem",
    textAlign: "center",
    transition: "all 0.3s linear",
    border: "1px solid #fff",
    width: "25vw",
    [theme.breakpoints.down('sm')]: {
      width: "40vw",
    },
    [theme.breakpoints.down('xs')]: {
      width: "90vw",
    },
  },
  service__title: {
    marginBottom: "20px"
  },
  sectionCenter: {
    width: "90vw",
    margin: "0 auto",
    maxWidth: "1170px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    [theme.breakpoints.down('sm')]: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr"
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: "1fr",
      columnGap: "2rem"
    },
  }
}))


const Services = () => {
  const classes = useStyles()

  return (
    <Box className="section" >
      <Title title="Services" />
      <div className={classes.sectionCenter}>
        {data.map(item => 
          <article key={item.id} className={classes.service}>
            {item.icon}
            <Typography className={classes.service__title} variant="h5">{item.title}</Typography>
            <Box className={classes.underline}></Box>
            <Typography variant="body2">{item.text}</Typography>
          </article> 
        )}
      </div>
    </Box>
  )
}

export default Services