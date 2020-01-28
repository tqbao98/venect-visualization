import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import casesInfo from './CasesInfo';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: "#273a3a"
  },
  quantity: {
    color: "#D6D4AF", 
    fontWeight:"bolder", 
    fontSize:"200%", 
    fontFamily:"Roboto"
  },
  value: {
    color: "#FDBF50", 
    fontWeight:"bolder", 
    fontSize:"350%", 
    fontFamily: "Georgia", 
    padding:"5% 0%"
  },
  graph: {
    paddingBottom: "180px"
  }
}));

const PanelContainer = (props) => {
    const classes = useStyles();
    const quantity = props.quantity
    const value = casesInfo[props.id-1].displayData[props.quantity]
    console.log(quantity)
    return (
        <Grid item xs={6} sm={6} md={6} lg={3} xl={3}>
            <Paper className={classes.paper}>
                <div className={classes.quantity}>{quantity}</div>
                <div className={classes.value}>{value}</div>
            </Paper>
        </Grid>
    )
}

const GraphContainer = (props) => {
    const classes = useStyles();
    const value = casesInfo[props.id-1].displayGraph[props.graphId]
    const startTime = casesInfo[props.id-1].startTime;
    const endTime = casesInfo[props.id-1].endTime;
    return (
        <Grid className={classes.graph} item xs={12} sm={12} md={12} lg={6} xl={6}>
            <iframe src={"https://iot.research.hamk.fi/visu/d-solo/Dr7h8rEWk/venect-calculation?orgId=4&from=" + startTime + "&to=" + endTime + "&panelId="+ value} 
            width="100%" height="200%" frameborder="0" ></iframe>
        </Grid>
    )
}

function CaseContainer(props) {
    const panels = Object.keys(props.displayData).map(e => (
        <PanelContainer id={props.id} quantity={e}/>
    ));
    const graphs = Object.keys(props.displayGraph).map(e => (
        <GraphContainer id={props.id} graphId={e}/>
    ));
    return (
        <div>
            <h1 style={{fontFamily: "Roboto",color: "#d6d4af"}}>Test burn #{props.id}</h1>
            <Grid container spacing={3}>
                {panels}
                {graphs}
            </Grid>
        </div>
    )
}

export default function TestCase(){
    const classes = useStyles();
    const cases = casesInfo.map(e => (
        CaseContainer(e)
    ));
    return(
        <div className={classes.root}>
            {cases}
        </div>
    );
}
