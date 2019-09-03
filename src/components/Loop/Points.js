import React, { Component } from 'react';

SubText = (props) => {
    return (
        <div className={'sub-text-div ' + props.addClassName.subTextDiv}>
          <div className="sub-text">
            <strong className="bold-text">{props.title}</strong>
          </div>
        </div>
    );
}