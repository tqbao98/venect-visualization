import React, { Component } from "react";
import Sidebar from './Sidebar';
import {BrowserRouter, Route} from 'react-router-dom';
import Loop from '../Loop/Loop'
import About from '../About/About'
import Login from '../Login/Login'
import Electricity from '../Electricity/Electricity'
import Result from '../Result/Result'

export default class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <Sidebar>
          <Route exact path="/venect" component={Loop}/>
          <Route path="/venect/about" component={About}/>
          <Route path="/venect/login" component={Login}/>
          <Route path="/venect/electricity" component={Electricity}/>
          <Route path="/venect/result" component={Result}/>
          
        </Sidebar>
      </BrowserRouter>
    );
  }
}
