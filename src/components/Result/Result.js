import React, { Component } from "react";
import CenteredGrid from './TestCase';

export default class Login extends Component{
  render(){
    return (
    <div class="container">
      <div className="main-content">
        <h3 className="heading">Results</h3>
          <div className="content-div.result">
            <div className="test-case" style={{padding: "5vh 10vw"}}>
              <h1 style={{fontFamily: "Roboto",color: "#d6d4af"}}>Test case #1</h1>
              <CenteredGrid/>
            </div>
          </div>
      </div>
    </div>  
    );
  }
}