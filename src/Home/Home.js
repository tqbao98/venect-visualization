import React, { Component } from "react";
import Sidebar from './Sidebar';

export default class Home extends Component {
  render() {
    return (
      <Sidebar>
        <div className="main-content">
          <div className="title-row w-row">
            <div className="logo-container w-col w-col-9">
              <h3 className="heading">Energy cycle</h3>
            </div>
            <div className="w-col w-col-3" />
          </div>
        </div>
      </Sidebar>
    );
  }
}
