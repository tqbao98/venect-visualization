import React, { Component } from "react";
import Sidebar from './Sidebar';


export default class Home extends Component {
  render() {
    return (
      <Sidebar>
        <div className="main-content">       
          <h3 className="heading">Energy cycle</h3>
          
        </div>
      </Sidebar>
    );
  }
}