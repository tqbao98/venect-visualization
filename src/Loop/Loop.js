import React, { Component } from 'react';

import diagram from '../images/EnergyDiagram.svg';

export default class Loop extends Component {
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