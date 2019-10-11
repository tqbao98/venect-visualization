import React, { Component } from "react";
import Loop from '../Loop/Loop'
import Sidebar from './Sidebar';
import {BrowserRouter, Route} from 'react-router-dom';
import About from '../About/About'

export default class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <Sidebar>

            <Route exact path="/" component={Loop}/>
            <Route path="/about" component={About}/>
          </Sidebar>
      </BrowserRouter>
    );
  }
}
