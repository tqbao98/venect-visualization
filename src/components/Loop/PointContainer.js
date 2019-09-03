import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';

const pointsList = [
  {
    "measurement" : "TE-001",
    "position" : {
      "top" : "0",
      "left" : "0"
    },
  },
  {
    "measurement" : "TE-002",
    "position" : {
      "top" : "30",
      "left" : "0"
    },
  },
  {
    "measurement" : "TE-003",
    "position" : {
      "top" : "60",
      "left" : "0"
    },
  }
]

const Container = (props) => {
  const {position,measurement} = props.pointsList
  return (
      <div style={{position:'absolute',top:`${position.top}%`,left:`${position.left}%`}}>
        <div style={{textAlign:'center'}}>{measurement}</div>
        <Chip size="small" label="Basic Chip"/>
      </div>
  );
}

export default function Points (props) {
  const points = pointsList.map(e => (
    <Container 
      key={e.measurement}
      pointsList={e} 
    />
  ))
  return points
}