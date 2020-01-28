import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
        <Grid container spacing={3} style={{padding: "0vh 10vw"}}>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4} elevation={0}>
                <Paper style={{backgroundColor:"transparent", boxShadow:"none"}} className={classes.paper}>
                </Paper>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <Paper style={{backgroundColor:"transparent", boxShadow:"none"}} className={classes.paper}>
                    <div style={{color: "#d6d4af", fontWeight:"bolder", fontSize:"2em", fontFamily:"Roboto"}}>Thermal heat</div>
                </Paper>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <Paper style={{backgroundColor:"transparent", boxShadow:"none"}} className={classes.paper}>
                    <div style={{color: "#d6d4af", fontWeight:"bolder", fontSize:"2em", fontFamily:"Roboto"}}>Electricity</div>
                </Paper>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <Paper style={{backgroundColor:"transparent", boxShadow:"none"}} className={classes.paper}>
                    <div style={{color: "#d6d4af", fontWeight:"bolder", fontSize:"2em", fontFamily:"Roboto", padding:"5% 0%"}}>Production</div>
                </Paper>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <Paper style={{backgroundColor:"transparent", boxShadow:"none"}} className={classes.paper}>
                    <div style={{color: "#Fdbf50", fontWeight:"bolder", fontSize:"4em", fontFamily: "Georgia", padding:"5% 0%"}}>4.3MWh</div>
                </Paper>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <Paper style={{backgroundColor:"transparent", boxShadow:"none"}} className={classes.paper}>
                    <div style={{color: "#Fdbf50", fontWeight:"bolder", fontSize:"4em", fontFamily: "Georgia", padding:"5% 0%"}}>2.7MWh</div>
                </Paper>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <Paper style={{backgroundColor:"transparent", boxShadow:"none"}} className={classes.paper}>
                    <div style={{color: "#d6d4af", fontWeight:"bolder", fontSize:"2em", fontFamily:"Roboto", padding:"5% 0%"}}>Consumption</div>
                </Paper>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <Paper style={{backgroundColor:"transparent", boxShadow:"none"}} className={classes.paper}>
                    <div style={{color: "#Fdbf50", fontWeight:"bolder", fontSize:"4em", fontFamily: "Georgia", padding:"5% 0%"}}>0.4MWh</div>
                </Paper>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <Paper style={{backgroundColor:"transparent", boxShadow:"none"}} className={classes.paper}>
                    <div style={{color: "#Fdbf50", fontWeight:"bolder", fontSize:"4em", fontFamily: "Georgia", padding:"5% 0%"}}>0.2MWh</div>
                </Paper>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <Paper style={{backgroundColor:"transparent", boxShadow:"none"}} className={classes.paper}>
                    <div style={{color: "#d6d4af", fontWeight:"bolder", fontSize:"2em", fontFamily:"Roboto", padding:"5% 0%"}}>Efficiency</div>
                </Paper>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <Paper style={{backgroundColor:"transparent", boxShadow:"none"}} className={classes.paper}>
                    <div style={{color: "#Fdbf50", fontWeight:"bolder", fontSize:"4em", fontFamily: "Georgia", padding:"5% 0%"}}>90%</div>
                </Paper>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <Paper style={{backgroundColor:"transparent", boxShadow:"none"}} className={classes.paper}>
                    <div style={{color: "#Fdbf50", fontWeight:"bolder", fontSize:"4em", fontFamily: "Georgia", padding:"5% 0%"}}>93%</div>
                </Paper>
            </Grid>
        </Grid>
    )
}