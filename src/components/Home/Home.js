import React, { Component } from "react";
import Sidebar from './Sidebar';
import Loop from '../Loop/Loop'

export default class Home extends Component {
  render() {
    return (
      <Sidebar>
        <div className="main-content">       
          <h3 className="heading">Energy cycle</h3>
          <Loop />
        </div>
      </Sidebar>
    );
  }
}
