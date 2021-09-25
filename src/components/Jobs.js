import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Title from "./Title"
import { makeStyles } from "@material-ui/core/styles"
import { FaAlignRight } from 'react-icons/fa'

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "3rem 0",
  },
  jobs: {
    background: "#2c455c"
  },
  jobs_center: {
    width: "80vw",
    margin: "0 auto",
    maxWidth: "1170px",
    [theme.breakpoints.up('md')]: {
      width: "90vw",
      display: "grid",
      gridTemplateColumns: "200px 1fr",
      columnGap: "4rem"
    }
  },
  btn_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "4rem",
    [theme.breakpoints.up('md')]: {
      flexDirection: "column",
      justifyContent: "flex-start",
    }
  },
  job_btn: {
    background: "transparent",
    borderColor: "transparent",
    color: "#fff",
    textTransform: "capitalize",
    fontSize: "1.25rem",
    letterSpacing: "0.2rem",
    margin: "0 0.5rem",
    transition: "all 0.3s linear",
    cursor: "pointer",
    padding: "0.25rem",
    lineHeight: "1",
    "&:hover": {
      color: "#E2B979",
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: "1rem",
    }
  },
  active_btn: {
    color: "#E2B979",
    boxShadow: "0 2px #E2B979"
  },
  job__info: {
    /* min-height: 420px; */
  },
  job__info_position: {
    fontWeight: "400",
    marginBottom: "10px"
  },
  job__info_company: {
    textTransform: "uppercase",
    color: "#000",
    background: "#E2B979",
    opacity: "0.7",
    display: "inline-flex",
    padding: "0.2rem 0.3rem",
    borderRadius: "0.25rem",
    marginBottom: "10px"
  },
  job__date: {
    letterSpacing: "0.2rem",
    marginBottom: "10px"
  },
  job__desc: {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    columnGap: "2rem",
    alignItems: "center",
    marginBottom: "0.25rem"
  },
  job__icon: {
    color: "#fff"
  },
  center_btn: {
    display: "block",
    width: "10rem",
    textAlign: "center",
    margin: "0 auto",
    marginTop: "3rem",
    padding: "0.5rem 0",
    color: "#fff",
    textDecoration: "none",
    border: "1px solid #fff",
    borderRadius: "20px",
    transition: "all 0.3s linear",
    "&:hover": {
      border: "2px solid #E2B979",
      color: "#E2B979"
    }
  }
}))

const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          title
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const classes = useStyles()

  const {
    allStrapiJobs: { nodes: jobs }
  } = data

  const [value, setValue] = useState(0)

  const { company, position, date, desc } = jobs[value]
  
  return (
    <Box className={`${classes.section} ${classes.jobs}`}>
      <Title title="Опыт работы" />
      <Box className={classes.jobs_center}>
        <Box className={classes.btn_container}>
          {jobs?.map((item, idx) => {
            return (
              <Button onClick={() => setValue(idx)} className={`${classes.job_btn} ${idx === value && classes.active_btn}`}>{item.company}</Button>
            )
          })}
        </Box>
        <Box className={classes.job__info}>
          <Typography variant="h6" className={classes.job__info_position}>{position}</Typography>
          <Typography variant="body1" className={classes.job__info_company}>{company}</Typography>
          <Typography variant="body2" className={classes.job__date}>{date}</Typography>
          {desc?.map((elem) => {
            return (
              <Box key={elem.id} className={classes.job__desc}>
                <FaAlignRight className={classes.job__icon}></FaAlignRight>
                <Typography variant="body2">{elem.title}</Typography>
              </Box>
            )
          })}
        </Box>
      </Box>
      <Link to="/about" className={classes.center_btn}>Узнать больше</Link>
    </Box>
  )
}

export default Jobs
