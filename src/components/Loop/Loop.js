import React, { Component } from 'react';
import diagram from '../../images/EnergyDiagram2.svg';
import axios from 'axios';
import PointContainer from './PointContainer'

// configure mqtt client
var mqtt = require('mqtt');
var host = 'wss://iot.research.hamk.fi:443/mqtt';
var options = {
    keepalive: 3600,
    protocolId: 'MQTT',
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    will: {
      topic: 'WillMsg',
      payload: 'Connection Closed abnormally..!',
      qos: 0,
      retain: false,
    },
    username: '',
    password: '',
    rejectUnauthorized: false,
};
var mqttClient = mqtt.connect(
    host,
    options,
);

// subscribe to all topic with kontti/ui
mqttClient.on('connect', function() {
    mqttClient.subscribe('hamk/iot/valkeakoski/kontti/ui/#');
});

export default class Loop extends Component {
    state = {
        pointsSchema: [],
        mqttMessages: []
    }

    componentDidMount() {
        axios.get(`https://iot.research.hamk.fi/api/v1/kontti/TOE/pointsSchema`)
        .then(res => {
            const pointsSchema = res.data;
            this.setState({ pointsSchema });
            //console.log(this.state);
        })

        const setMqttState = (message,topic) => {
          this.setState({ [topic]: message });
        }

        mqttClient.on('message', function(topic, message) {
            let mqttMessages = JSON.parse(message.toString()); // parse buffer to string
            let mqttTopic = topic.toString().slice(31); // slice off "hamk/iot/valkeakoski/kontti/ui/" part, leaving only TE,PE,etc.
            setMqttState(mqttMessages, mqttTopic);
        });
    }

    componentDidUpdate() {
      //console.log(this.state['hamk/iot/valkeakoski/kontti/ui/HV'])
    }

    render() {
      const F1 = this.state.F1;
      const F2 = this.state.F2;
      const TE = this.state.TE;
      const SC = this.state.SC;
      const P1 = this.state.P1;
      const P2 = this.state.P2;
      const P3 = this.state.P3;
      const HV = this.state.HV;
      const AK = this.state.AK;
      
        return (
          <div className="main-content">       
            <h3 className="heading">Energy cycle</h3>
            
          
            <div className="loop-container-loop">
              <div className="loop-container">
                <div className="loop-wrapper">
                
                  <div className="div-block">
                  
                      <PointContainer 
                      info={this.state.pointsSchema} 
                      messages={{...P1,...P2,...P3,...F1,...F2,...TE,...SC,...HV,...AK}}
                    />
                  <img src={diagram} alt="Diagram" className="diagram" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}