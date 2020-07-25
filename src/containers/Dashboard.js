import { Box, Container, CssBaseline, Grid, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { API, Auth } from "aws-amplify"
import clsx from "clsx"
import React, { useEffect, useState } from "react"
import AppBarWithDrawer from "../components/AppBarWithDrawer"
import Footer from "../components/Footer"
import PotentialSavings from "../components/PotentialSavings"
import Wastage from "../components/Wastage"
import { onError } from "../libs/errorLib"

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
    height: 900,
  },
}))

const Dashboard = () => {
  const classes = useStyles()
  const [data, setData] = useState()

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  useEffect(() => {
    async function getEntityId() {
      try {
        const info = await Auth.currentUserInfo()
        return info.attributes["custom:entityId"]
      } catch (e) {
        onError(e)
      }
    }

    async function loadData() {
      const entityId = await getEntityId()
      const myInit = {
        queryStringParameters: {
          "custom:entityId": entityId,
        },
      }
      return API.get("data", "/data", myInit)
    }
    async function onLoad() {
      try {
        const data = await loadData()
        setData(data)
      } catch (e) {
        onError(e)
      }
    }
    
    onLoad()
  }, [])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBarWithDrawer title="Dashboard" />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Wastage */}
            <Grid item xs={12} md={5} lg={6}>
              <Paper className={fixedHeightPaper}>
                <Wastage data={data} />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={7} lg={6}>
              <Paper className={fixedHeightPaper}>
                <PotentialSavings data={data} />
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

export default Dashboard
