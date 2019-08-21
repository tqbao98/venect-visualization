import React, { Component } from 'react';
import diagram from '../images/EnergyDiagram.svg';
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
var client = mqtt.connect(
    host,
    options,
);

//Subscribe
client.on('connect', function() {
    client.subscribe('hamk/iot/valkeakoski/kontti/ui/#');
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

        client.on('message', function(topic, message) {
            // message is Buffer
            let mqttMessages = JSON.parse(message.toString());
            let mqttTopic = topic.toString();
            
            switch (mqttTopic) {
              // case 'hamk/iot/valkeakoski/kontti/ui/p1':
              //   props.actions.mqttP1(returnMessage, returnTopic);
              //   break;
              // case 'hamk/iot/valkeakoski/kontti/ui/p2':
              //   props.actions.mqttP2(returnMessage, returnTopic);
              //   break;
              // case 'hamk/iot/valkeakoski/kontti/ui/TE':
              //   props.actions.mqttTe(returnMessage, returnTopic);
              //   break;
              // case 'hamk/iot/valkeakoski/kontti/ui/HV':
              //   props.actions.mqttHv(returnMessage, returnTopic);
              //   break;
              // case 'hamk/iot/valkeakoski/kontti/ui/solar/heat':
              //   props.actions.mqttSolar(returnMessage, returnTopic);
              //   break;
              default:
                setMqttState(mqttMessages, mqttTopic)
                break;
            }
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