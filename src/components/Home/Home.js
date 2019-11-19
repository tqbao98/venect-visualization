import React, { Component } from "react";
import Loop from '../Loop/Loop'
import Sidebar from './Sidebar';
import {BrowserRouter, Route} from 'react-router-dom';
import About from '../About/About'
import Login from '../Login/Login'

export default class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <Sidebar>
          <Route exact path="/" component={Loop}/>
          <Route path="/about" component={About}/>
          <Route path="/login" component={Login}/>
        </Sidebar>
      </BrowserRouter>
    );
  }
}
