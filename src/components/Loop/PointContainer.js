import React, { Component } from 'react';
import pointsList from './PointsList';
import DataMapping from './DataMapping';
import Popup from 'reactjs-popup';

const GrafanaPopup = props => (
  <Popup
    trigger={open => (
      <div className="main-text-div" style={{textAlign:'center'}}>
        <span>
          {props.result}
        </span>
      </div>
    )}

    position={props.position}

    contentStyle={{
      width: 'auto',
      backgroundColor: '#000000',
      border: '1px solid rgba(29,27,27,0.75)',
      borderRadius: '5px',
      boxShadow: '1px 1px 5px 0 rgba(51, 50, 50, .75)',
    }}
    arrowStyle={{
      background: '#C75E24',
    }}
  >
    <div className="content-div">
        <iframe
      src={
        'https://iot.research.hamk.fi/visu/d-solo/Kogkmv2Wz/venect-measurements?orgId=4&from=now-6h&to=now&panelId=' + 
        props.pointsList.panelId
      }
      title={props.pointsList.measurement}
      width="450"
      height="200"
      frameborder="0"
    />
    </div>
  </Popup>
)

const Container = (props) => {
  const {position,measurement} = props.pointsList;
  let containerStyle = measurement.includes("AK_P") || measurement.includes("P1") || measurement.includes("P2") ?
                        {position:'absolute',top:`${position.top}%`,left:`${position.left}%`,display:'flex',flexDirection:'row', justifyContent:'space-evenly'} :
                        {position:'absolute',top:`${position.top}%`,left:`${position.left}%`}
  var result = DataMapping({id:props.pointsList.measurement, message:props.message});
  
  // choose whether chips are under or beside measurements ID
  return (
    <div style={containerStyle}>
      <div style={{textAlign:'center', color:"#C79F59"}}>{measurement}</div>
      <GrafanaPopup {...props} result={result} />
    </div>
  )
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