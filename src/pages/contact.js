import * as React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Button, createTheme, ThemeProvider } from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline"
import Layout from "../components/Layout"

const darkTheme = createTheme({
  palette: {
    type: "dark"
  }
})

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "3rem 0",
  },
  contacts: {
    height: "90vh"
  },
  contacts__page: {
    display: "grid",
    placeItems: "center",
    padding: "5rem 0"
  },
  contacts__form: {
    background: "#fff",
    borderRadius: "0.25rem",
    margin: "0 auto",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s linear",
    width: "90vw",
    maxWidth: "35rem",
    "&:hover": {
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    }
  },
  contacts__form_title: {
    paddingTop: "1.25rem",
    textAlign: "center",
    color: "grey"
  },
  form__group: {
    padding: "1rem 1.5rem"
  },
  form__control: {
    display: "block",
    width: "100%",
    padding: "0.75rem 1rem",
    border: "none",
    marginBottom: "1.25rem",
    background: "grey",
    borderRadius: "0.25rem",
    textTransform: "uppercase",
    letterSpacing: "0.2rem",
    "&::placeholder": {
      color: "lightGrey",
      textTransform: "uppercase",
      letterSpacing: "0.2rem",
    }
  },
  submit__btn: {
    display: "block",
    width: "100%",
    padding: "1rem",
    borderBottomLeftRadius: "0.25rem",
    borderBottomRightRadius: "0.25rem",
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0
  }
}))

const Contact = () => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <CssBaseline />
        <section className={`${classes.section} ${classes.contacts}`}>
          <article className={classes.contacts__form}>
            <h3 className={classes.contacts__form_title}>Писать можно сюда</h3>
            <form action="" method="POST">
              <div className={classes.form__group}>
                <input type="text" name="name" placeholder="name" className={classes.form__control} />
                <input type="email" name="email" placeholder="email" className={classes.form__control} />
                <textarea name="message" rows="5" placeholder="message" className={classes.form__control} />
              </div>
              <button type="submit" className={classes.submit__btn}>Submit</button>
            </form>
          </article>
        </section>
      </Layout>
    </ThemeProvider>
  )
}

export default Contact
