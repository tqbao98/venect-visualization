import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';

const pointsList = [
  {
    "measurement" : "TE-001",
    "position" : {
      "top" : 0,
      "left" : 0
    },
  },
  {
    "measurement" : "TE-002",
    "position" : {
      "top" : 30,
      "left" : 0
    },
  },
  {
    "measurement" : "TE-003",
    "position" : {
      "top" : 60,
      "left" : 0
    },
  }
]

export default function PointContainer (props) {
  return (
      <div style={{position:'absolute',top:0}}>
        <div style={{textAlign:'center'}}>TE-001</div>
        <Chip size="small" label="Basic Chip"/>
      </div>
  );
}

