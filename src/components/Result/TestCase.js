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
    <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                <Paper style={{backgroundColor:"#273a3a"}} className={classes.paper}>
                    <div style={{color: "#d6d4af", fontWeight:"bolder", fontSize:"2em", fontFamily:"Roboto"}}>Fuel volume</div>
                    <div style={{color: "#Fdbf50", fontWeight:"bolder", fontSize:"4em", fontFamily: "Georgia", padding:"5% 0%"}}>17l</div>
                </Paper>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                <Paper style={{backgroundColor:"#273a3a"}} className={classes.paper}>
                    <div style={{color: "#d6d4af", fontWeight:"bolder", fontSize:"200%", fontFamily:"Roboto"}}>Duration</div>
                    <div style={{color: "#Fdbf50", fontWeight:"bolder", fontSize:"400%", fontFamily: "Georgia", padding:"5% 0%"}}>1h30m</div>
                </Paper>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                <Paper style={{backgroundColor:"#273a3a"}} className={classes.paper}>
                    <div style={{color: "#d6d4af", fontWeight:"bolder", fontSize:"200%", fontFamily:"Roboto"}}>Date</div>
                    <div style={{color: "#Fdbf50", fontWeight:"bolder", fontSize:"400%", fontFamily: "Georgia", padding:"5% 0%"}}>02.09.19</div>
                </Paper>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                <Paper style={{backgroundColor:"#273a3a"}} className={classes.paper}>
                    <div style={{color: "#d6d4af", fontWeight:"bolder", fontSize:"200%", fontFamily:"Roboto"}}>Temperature</div>
                    <div style={{color: "#Fdbf50", fontWeight:"bolder", fontSize:"400%", fontFamily: "Georgia", padding:"5% 0%"}}>15°</div>
                </Paper>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                <Paper style={{backgroundColor:"#273a3a"}} className={classes.paper}>
                    <div style={{color: "#d6d4af", fontWeight:"bolder", fontSize:"200%", fontFamily:"Roboto"}}>Material</div>
                    <div style={{color: "#Fdbf50", fontWeight:"bolder", fontSize:"400%", fontFamily: "Georgia", padding:"5% 0%"}}>Pallet</div>
                </Paper>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                <Paper style={{backgroundColor:"#273a3a"}} className={classes.paper}>
                    <div style={{color: "#d6d4af", fontWeight:"bolder", fontSize:"200%", fontFamily:"Roboto"}}>Energy production</div>
                    <div style={{color: "#Fdbf50", fontWeight:"bolder", fontSize:"400%", fontFamily: "Georgia", padding:"5% 0%"}}>57.5kWh</div>
                </Paper>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                <Paper style={{backgroundColor:"#273a3a"}} className={classes.paper}>
                    <div style={{color: "#d6d4af", fontWeight:"bolder", fontSize:"200%", fontFamily:"Roboto"}}>Useful energy</div>
                    <div style={{color: "#Fdbf50", fontWeight:"bolder", fontSize:"400%", fontFamily: "Georgia", padding:"5% 0%"}}>26.8kWh</div>
                </Paper>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                <Paper style={{backgroundColor:"#273a3a"}} className={classes.paper}>
                    <div style={{color: "#d6d4af", fontWeight:"bolder", fontSize:"200%", fontFamily:"Roboto"}}>Efficiency</div>
                    <div style={{color: "#Fdbf50", fontWeight:"bolder", fontSize:"400%", fontFamily: "Georgia", padding:"5% 0%"}}>47%</div>
                </Paper>
            </Grid>
            
        
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <iframe src="https://iot.research.hamk.fi/visu/d-solo/Dr7h8rEWk/venect-calculation?orgId=4&from=1567404000000&to=1567432800000&panelId=10" width="100%" height="200%" frameborder="0"></iframe>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <iframe src="https://iot.research.hamk.fi/visu/d-solo/Dr7h8rEWk/venect-calculation?orgId=4&from=1567404000000&to=1567432800000&panelId=12" width="100%" height="200%" frameborder="0"></iframe>
            </Grid>
        </Grid>
    </div>
  );
}
