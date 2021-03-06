import { Box, Container, CssBaseline, Grid, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import AppBarWithDrawer from "../components/AppBarWithDrawer"
import Footer from "../components/Footer"
import WastageLine from "../components/WastageLine.js"
import WastageStackedBar from "../components/WastageStackedBar"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(5),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 560,
  },
}))

const Weekly = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBarWithDrawer title="Weekly" />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Total Wastage (By Cost) */}
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={classes.paper}>
                <WastageLine />
              </Paper>
            </Grid>
            {/* Waste Composition (By Cost) */}
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={classes.paper}>
                <WastageStackedBar />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  )
}

export default Weekly
