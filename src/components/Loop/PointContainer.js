import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';
import pointsList from './PointsList';
import DataMapping from './DataMapping';
import PopUp from './popUp';
import { getThemeProps } from '@material-ui/styles';

const Container = (props) => {
  
  var result = DataMapping({id:props.pointsList.measurement, message:props.message});
  console.log(props);
  const {position,measurement} = props.pointsList;
  // choose whether chips are under or beside measurements ID
  if (measurement.includes("AK_P") || measurement.includes("P1") || measurement.includes("P2")){
    return (
      <div style={{position:'absolute',top:`${position.top}%`,left:`${position.left}%`}}>
        <div style={{textAlign:'center', color:"#C79F59"}}>{measurement} <Chip label={result}></Chip></div>
      </div>
    );
  } else {
    return (
      <div style={{position:'absolute',top:`${position.top}%`,left:`${position.left}%`}}>
        <div style={{textAlign:'center', color:"#C79F59"}}>{measurement}</div>
        <div className="main-text-div">{result}</div>
      </div>
    );
  }
}

// map all points (from pointsList) with html's style in Container, to display on loop 
export default function Points (props) {
  
  const points = pointsList.map(e => (
    <Container 
      key={e.measurement}
      pointsList={e}
      message={props.messages}
    />
    
  ));

  return points;
}