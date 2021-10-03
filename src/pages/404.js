import * as React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { createTheme, ThemeProvider } from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline"
import Layout from "../components/Layout"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import SEO from "../components/SEO"

const darkTheme = createTheme({
  palette: {
    type: "dark"
  }
})

const useStyles = makeStyles((theme) => ({
  error__page: {
    background: "#082340",
    height: "90vh",
    display: "grid",
    placeItems: "center",
    textAlign: "center"
  },
  error__title: {
    textTransform: "uppercase",
    color: "#fff",
    marginBottom: "2rem"
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

const ErrorPage = () => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout withoutFooter>
        <CssBaseline />
        <Box className={classes.error__page}>
          <Box>
            <Typography variant="h5" className={classes.error__title}>
              Такой страницы не существует
            </Typography>
            <Link to="/" className={classes.center_btn}>Назад</Link>
          </Box>
        </Box>
      </Layout>
    </ThemeProvider>
  )
}

export default ErrorPage
