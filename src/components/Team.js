import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import React from "react"
import BryanAvatar from "../assets/bryan.jpeg"
import DanielAvatar from "../assets/daniel.jpeg"
import RyanAvatar from "../assets/ryan.jpeg"
import YiChenAvatar from "../assets/yichen.jpeg"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderStyle: "hidden",
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}))

const Team = () => {
  const classes = useStyles()
  return (
    <Grid container spacing={4}>
      <Grid item key={1} xs={12} sm={6}>
        <Card className={classes.card}>
          <div
            style={{
              margin: "auto",
              paddingTop: "30px",
              textAlign: "center",
            }}
          >
            <Avatar
              alt="Bryan Phee"
              src={BryanAvatar}
              className={classes.large}
            />
          </div>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom align="center" variant="h5" component="h2">
              <strong>Bryan Phee – ML Engineer</strong>
            </Typography>
            <ul>
              <li>
                <Typography align="left">
                  Carnegie Mellon University MS, Electrical and Computer
                  Engineering
                </Typography>
              </li>
              <br />
              <li>
                <Typography align="left">
                  Cyber Security Engineer @ CSIT
                </Typography>
              </li>
              <br />
              <li>
                <Typography align="left">
                  Graduate Research Assistant (Cyber Security, Machine Learning)
                  @ Carnegie Mellon University
                </Typography>
              </li>
              <br />
              <li>
                <Typography align="left">
                  National Champion @ Schneider Electric (Cyber Security &
                  Machine Learning) Case Competition
                </Typography>
              </li>
              <br />
              <li>
                <Typography align="left">
                  Skilled in Python (Tensorflow & Keras for ML), C
                </Typography>
              </li>
            </ul>
          </CardContent>
          <CardActions
            style={{
              margin: "auto",
              paddingBottom: "30px",
              textAlign: "center",
            }}
          >
            <a
              href="https://www.linkedin.com/in/pheebryan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon color="action" fontSize="large" />
            </a>
            <a
              href="https://github.com/beephee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon color="action" fontSize="large" />
            </a>
          </CardActions>
        </Card>
      </Grid>
      <Grid item key={2} xs={12} sm={6}>
        <Card className={classes.card}>
          <div
            style={{
              margin: "auto",
              paddingTop: "30px",
              textAlign: "center",
            }}
          >
            <Avatar
              alt="Wei Yi Chen"
              src={YiChenAvatar}
              className={classes.large}
            />
          </div>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom align="center" variant="h5" component="h2">
              <strong>Wei Yi Chen – Business Strategist</strong>
            </Typography>
            <ul>
              <li>
                <Typography align="left">
                  NUS BBA Hons. (Highest Distinction)
                </Typography>
              </li>
              <br />
              <li>
                <Typography align="left">
                  Incoming Management Consultant @ Accenture Strategy
                </Typography>
              </li>
              <br />
              <li>
                <Typography align="left">
                  Product & Business Strategy @ Swedish SaaS Startup Inex One
                </Typography>
              </li>
              <br />
              <li>
                <Typography align="left">
                  Consulting Intern @ The Boston Consulting Group
                </Typography>
              </li>
              <br />
              <li>
                <Typography align="left">
                  Skilled in Microsoft Office, Figma
                </Typography>
              </li>
            </ul>
          </CardContent>
          <CardActions
            style={{
              margin: "auto",
              paddingBottom: "30px",
              textAlign: "center",
            }}
          >
            <a
              href="https://www.linkedin.com/in/yi-chen-wei-a164418b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon color="action" fontSize="large" />
            </a>
          </CardActions>
        </Card>
      </Grid>
      <Grid item key={3} xs={12} sm={6}>
        <Card className={classes.card}>
          <div
            style={{
              margin: "auto",
              paddingTop: "30px",
              textAlign: "center",
            }}
          >
            <Avatar alt="Ryan Na" src={RyanAvatar} className={classes.large} />
          </div>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom align="center" variant="h5" component="h2">
              <strong>Ryan Na – Product Manager</strong>
            </Typography>
            <ul>
              <li>
                <Typography align="left">
                  NUS B.Eng (Engineering Science) Hons.
                </Typography>
              </li>
              <br />
              <li>
                <Typography align="left">
                  Software Developer turned Product Manager @ Sports Tech
                  Startup Exxentric AB
                </Typography>
              </li>
              <br />
              <li>
                <Typography align="left">
                  Skilled in Python (Tensorflow & Keras for ML), Swift
                </Typography>
              </li>
            </ul>
          </CardContent>
          <CardActions
            style={{
              margin: "auto",
              paddingBottom: "30px",
              textAlign: "center",
            }}
          >
            <a
              href="https://www.linkedin.com/in/yi-rong-na"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon color="action" fontSize="large" />
            </a>
            <a
              href="https://github.com/nayirong"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon color="action" fontSize="large" />
            </a>
          </CardActions>
        </Card>
      </Grid>
      <Grid item key={4} xs={12} sm={6}>
        <Card className={classes.card}>
          <div
            style={{
              margin: "auto",
              paddingTop: "30px",
              textAlign: "center",
            }}
          >
            <Avatar
              alt="Daniel Chew"
              src={DanielAvatar}
              className={classes.large}
            />
          </div>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom align="center" variant="h5" component="h2">
              <strong>Daniel Chew – Full Stack Developer</strong>
            </Typography>
            <ul>
              <li>
                <Typography align="left">
                  NUS BComp Hons. in Computer Science (Distinction)
                </Typography>
              </li>
              <br />
              <li>
                <Typography align="left">
                  Incoming Associate Professional Services Consultant @ AWS
                </Typography>
              </li>
              <br />
              <li>
                <Typography align="left">
                  Full Stack Software Engineer @ Blockchain Startup ChromaWay
                </Typography>
              </li>
              <br />
              <li>
                <Typography align="left">
                  Skilled in Python, JavaScript (React, Node.js)
                </Typography>
              </li>
            </ul>
          </CardContent>
          <CardActions
            style={{
              margin: "auto",
              paddingBottom: "30px",
              textAlign: "center",
            }}
          >
            <a
              href="https://www.linkedin.com/in/cctdaniel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon color="action" fontSize="large" />
            </a>
            <a
              href="https://github.com/cctdaniel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon color="action" fontSize="large" />
            </a>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Team
