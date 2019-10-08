import React from 'react';
import _ from 'lodash';

export default function DataMapping(props) {
  let result = [];
  let unit = [];
  const title = props.id;

  //console.log(props);
  function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  }

  unit = title.includes('TE')
    ? '°C'
    : title.includes('FE')
      ? 'l/s'
      : title.includes('PE')
        ? 'bar'
        : title.includes('PWM')
          ? '%'
          : title.includes('RPM')
            ? 'rpm'
            : title.includes('QQ')
              ? 'kWh'
              : '';

  result = props.message ? props.message[props.id] : result;

  switch (props.id) {
    case 'AK_P_FE':
      result = result / 3600;
      break;
    case 'K_HV001':
    case 'K_HV002':
    case 'K_HV003':
    case 'K_HV004':    
    case 'K_HV005':
    case 'K_HV006':
    case 'K_HV007':
    case 'K_HV008':
    case 'K_HV009':
    case 'K_HV010':    
    case 'K_HV011':
      result = result === 1 ? 'on' : 'off';
      break;
    case 'P1_FE':
    case 'P2_FE':
    case 'P3_FE':
      result = (result * 1000) / 3600;
      break;
    case 'P1_TE':
    case 'P2_TE':
    case 'P3_TE':  
      result = result - 273.15;
      break;
    default:
      break;
  }

  // result = props.points.find(element => element.id === props.id);

  var output;
  if (result || result === 0) {
    //console.log(result);
    output = <span>{isNaN(result) ? result : round(result, 3) + ' ' + unit}</span>;
  } else {
    //console.log('null');
    output = <span>loading</span>;
  }
  return output;
}