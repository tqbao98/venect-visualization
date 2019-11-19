import React, { Component } from "react";
import Timelime from './Timeline';
import Bio from './Bio';

export default class About extends Component{
  render(){
    return (
    <div class="container">
      <div className="main-content">       
        <h3 className="heading">About us</h3>

        <div class="about_section cc-hero">
          <div class="about_container cc-hero">
            <div class="div-block-3">
              <h1 class="eyebrow">About VEneCT</h1>
              <p class="about_large-heading">We're unleashing the potential of micro-cogeneration by automatic precise control.</p>
            </div>
          </div>
        </div>

        <div class="about_section">
          <div class="about_container cc-main-about">
            
            <div id="w-node-d1068e0b7662-067fc124" class="about_row cc-vision">
              <h2 class="eyebrow large">Vision</h2>
              <p class="about_vision">We expand and refine a hybrid energy module integrated with CHP, 
              ORC technology and microturbine to improve low-carbon efficient energy production</p>
            </div>

            <div id="w-node-d1068e0b766b-067fc124" class="about_row cc-target">
              <div>
              <h2 class="eyebrow large">Targets</h2>
              <p class="about_paragraph"></p>
              </div>
              <Timelime/>
            </div>
            
            <div id="w-node-d1068e0b7684-067fc124" class="about_row cc-team">
              <h2 class="eyebrow large">Funded by</h2>
              <img src="https://moodle.amk.fi/pluginfile.php/13988/block_html/content/lippu-ja-vipuvoima.png" alt="" class="funded-by_logo"/>
            </div>

            <Bio/>

            <div class="footer__bottom">
              <p class="footer__copyright-text light">© 2019 HAMK. All rights reserved.</p>
            </div>

          </div>
        </div>
      </div>
    </div>  
    );
  }
}