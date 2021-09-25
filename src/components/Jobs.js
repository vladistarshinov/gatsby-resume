import React, { useState } from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Title from "./Title"
import { makeStyles } from "@material-ui/core/styles"
import { FaAlignRight } from 'react-icons/fa'

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "5rem 0"
  },
  jobs_center: {
    width: "80vw",
    margin: "0 auto",
    maxWidth: "1170px"
  },
  btn_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "4rem"
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
    padding: "0.25rem 0",
    lineHeight: "1",
    "&:hover": {
      color: "#E2B979",
      boxShadow: "0 2px #E2B979"
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
    fontWeight: "400"
  },
  job__info_company: {
    textTransform: "uppercase",
    color: "#000",
    background: "#E2B979",
    opacity: "0.7",
    display: "inline-flex",
    padding: "0.2rem 0.3rem",
    borderRadius: "0.25rem"
  },
  job__date: {
    letterSpacing: "0.2rem"
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
    <Box>
      <Title title="Опыт работы" />
      <Box className={classes.jobs_center}>
        <Box className={classes.btn_container}>
          {jobs?.map((item, idx) => {
            return (
              <button onClick={() => setValue(idx)} className={`${classes.job_btn} ${idx === value && classes.active_btn}`}>{item.company}</button>
            )
          })}
        </Box>
        <article className={classes.job__info}>
          <h3 className={classes.job__info_position}>{position}</h3>
          <h4 className={classes.job__info_company}>{company}</h4>
          <p className={classes.job__date}>{date}</p>
          {desc.map((elem) => {
            return (
              <Box key={elem.id} className={classes.job__desc}>
                <FaAlignRight className={classes.job__icon}></FaAlignRight>
                <p>{elem.title}</p>
              </Box>
            )
          })}
        </article>
      </Box>
    </Box>
  )
}

export default Jobs
