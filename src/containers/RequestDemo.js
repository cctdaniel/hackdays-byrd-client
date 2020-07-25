import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React, { useState } from "react"
import Footer from "../components/Footer"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  title: {
    flexGrow: 1,
  },
}))

export const Home = () => {
  const classes = useStyles()
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    entities: "",
    volume: "",
  })

  const validateForm = () => {
    return state.email.length > 0 && state.entities > 0 && state.volume > 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    const value = event.target.value
    setState({
      ...state,
      [event.target.name]: value,
    })
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" align="left" className={classes.title}>
              Request Demo
            </Typography>
            <Link color="inherit" href="/">
              <Button color="inherit">Home</Button>
            </Link>
            <Link color="inherit" href="/sign-in">
              <Button color="inherit">Sign In</Button>
            </Link>
            <Link color="inherit" href="/sign-up">
              <Button color="inherit">Sign Up</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="lg">
            <Grid container spacing={10}>
              <Grid item xs={6}>
                <Typography
                  component="h4"
                  variant="h4"
                  align="left"
                  color="textPrimary"
                  gutterBottom
                >
                  <strong>
                    IMPROVE THE PROFITABILITY OF YOUR KITCHEN THROUGH ADVANCED
                    FOOD WASTE TECHNOLOGY:
                  </strong>
                </Typography>
                <Typography
                  variant="h5"
                  align="left"
                  color="textSecondary"
                  paragraph
                >
                  From food waste to ingredients orders, manage all your kitchen
                  operations effortlessly with BYRD. Welcome to the future.
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.paper}>
                  <Typography component="h1" variant="h5">
                    Request Demo
                  </Typography>
                  <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="fname"
                          name="firstName"
                          variant="outlined"
                          required
                          fullWidth
                          id="firstName"
                          label="First Name"
                          onChange={handleChange}
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="lastName"
                          label="Last Name"
                          name="lastName"
                          autoComplete="lname"
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="entities"
                          label="Number of Entities"
                          type="number"
                          id="entities"
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="volume"
                          label="Volume of Food"
                          type="number"
                          id="volume"
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>
                    <div className={classes.wrapper}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={!validateForm()}
                        className={classes.submit}
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>

      {/* Footer */}
      <footer className={classes.footer}>
        <Footer />
      </footer>
      {/* End footer */}
    </React.Fragment>
  )
}

export default Home
