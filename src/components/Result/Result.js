import React, { Component } from "react";
import TestCase from './TestCase';
import General from './General';

export default function Result (){
    return (
    <div class="container">
      <div className="main-content">
        <h3 className="heading">Results</h3>
          <div className="content-div.result" style={{padding: "5vh 10vw"}}>
            <div className="result.general">
              
            </div>
            <div className="test-case">
              
              <TestCase/>
              
            </div>
          </div>
      </div>
    </div>  
    );
  
}