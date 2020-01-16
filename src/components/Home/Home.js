import React, { Component } from "react";
import Sidebar from './Sidebar';
import {BrowserRouter, Route} from 'react-router-dom';
import Loop from '../Loop/Loop'
import About from '../About/About'
import Login from '../Login/Login'
import Electricity from '../Electricity/Electricity'

export default class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <Sidebar>
          <Route exact path="/" component={Loop}/>
          <Route path="/about" component={About}/>
          <Route path="/login" component={Login}/>
          <Route path="/electricity" component={Electricity}/>
          
        </Sidebar>
      </BrowserRouter>
    );
  }
}
