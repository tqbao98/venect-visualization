import React, { Component } from 'react';
import diagram from '../../images/EnergyDiagram.svg';
import axios from 'axios';

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

//Subscribe
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
            console.log(this.state.pointsSchema)
        })

        const setMqttState = (message,topic) => {
          this.setState({ [topic]: message })
        }

        mqttClient.on('message', function(topic, message) {
            let mqttMessages = JSON.parse(message.toString());
            let mqttTopic = topic.toString().slice(31);
            setMqttState(mqttMessages, mqttTopic)
        });
    }

    componentDidUpdate() {
      console.log(this.state['hamk/iot/valkeakoski/kontti/ui/HV'])
    }

    render() {
        return (
          <div className="loop-container-loop">
            <div className="loop-container">
              <div className="loop-wrapper">
    
                <div className="div-block">
                  <img src={diagram} alt="Diagram" className="diagram" />
                </div>
              </div>
            </div>
          </div>
        );
    }
}