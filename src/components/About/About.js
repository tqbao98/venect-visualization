import React, { Component } from "react";
import Card from './Card';
import Timelime from './Timeline';
import Avatar from '@material-ui/core/Avatar';
import Stepper from './Stepper';
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
            <p class="about_vision">We expand and refine a hybrid energy module integrated with CHP, ORC technology and microturbine to improve low-carbon efficient energy production</p>
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

            <div id="w-node-d1068e0b76ce-067fc124" class="about_row cc-team">
              <h2 id="w-node-d1068e0b76cf-067fc124" class="eyebrow large">Our team</h2>
              <div class="about_team-bio-wrapper">
              <ul id="w-node-d1068e0b76d1-067fc124" class="about_founder-ul w-list-unstyled">
                <li class="about_founder-li">
                  <img src="https://www.hamk.fi/wp-content/uploads/2019/03/Heikkil%C3%A4_Susan_240X240.jpg"  alt="" class="about_team-photo"/>
                  <h3 class="about_founder-name">Susan Heikkilä</h3>
                  <p class="about_founder-title">Project Leader</p><a href="https://twitter.com/callmevlad" class="about_founder-twitter w-inline-block"><img src="https://assets-global.website-files.com/5d49b9b7faeb2d4fa82e27a8/5d49da1a15f2c1a70b01edd1_twitter.svg" alt="" class="about_founder-twitter-icon"/></a>
                </li>
                <li class="about_founder-li">
                  <img src="https://www.hamk.fi/wp-content/uploads/2019/09/Katariina-Penttil%C3%A4-Sept-2019.jpg"  alt="" class="about_team-photo"/>
                  <h3 class="about_founder-name">Katariinä Penttilä</h3>
                  <p class="about_founder-title">Technical Leader</p><a href="https://twitter.com/bryantchou" class="about_founder-twitter w-inline-block"><img src="https://assets-global.website-files.com/5d49b9b7faeb2d4fa82e27a8/5d49da1a15f2c1a70b01edd1_twitter.svg" alt="" class="about_founder-twitter-icon"/></a>
                  </li>
                <li class="about_founder-li">
                <img src="https://www.hamk.fi/wp-content/uploads/2019/03/Väisänen_Timo_240X240-150x150.jpg"  alt="" class="about_team-photo"/>
                  <h3 class="about_founder-name">Timo Väisänen</h3>
                  <p class="about_founder-title">ORC Specialist</p><a href="https://twitter.com/thesergie" class="about_founder-twitter w-inline-block"><img src="https://assets-global.website-files.com/5d49b9b7faeb2d4fa82e27a8/5d49da1a15f2c1a70b01edd1_twitter.svg" alt="" class="about_founder-twitter-icon"/></a>
                  </li>
                <li class="about_founder-li">
                  <img src="https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png"  alt="" class="about_team-photo"/>
                  <h3 class="about_founder-name">Juhani Henttonen</h3>
                  <p class="about_founder-title">Control Engineering Specialist</p><a href="https://twitter.com/thesergie" class="about_founder-twitter w-inline-block"><img src="https://assets-global.website-files.com/5d49b9b7faeb2d4fa82e27a8/5d49da1a15f2c1a70b01edd1_twitter.svg" alt="" class="about_founder-twitter-icon"/></a>
                </li>
                <li class="about_founder-li">
                  <img src="https://www.hamk.fi/wp-content/uploads/2019/03/Mustonen_Lea_648X648-150x150.jpg"  alt="" class="about_team-photo"/>
                  <h3 class="about_founder-name">Lea Mustonen</h3>
                  <p class="about_founder-title">Communication Specialist</p><a href="https://twitter.com/thesergie" class="about_founder-twitter w-inline-block"><img src="https://assets-global.website-files.com/5d49b9b7faeb2d4fa82e27a8/5d49da1a15f2c1a70b01edd1_twitter.svg" alt="" class="about_founder-twitter-icon"/></a>
                </li>
                <li class="about_founder-li">
                  <img src="https://www.hamk.fi/wp-content/uploads/2019/10/Ari-Lindgren-2019.jpg"  alt="" class="about_team-photo"/>
                  <h3 class="about_founder-name">Ari Lingdren</h3>
                  <p class="about_founder-title">Project Engineer</p><a href="https://twitter.com/callmevlad" class="about_founder-twitter w-inline-block"><img src="https://assets-global.website-files.com/5d49b9b7faeb2d4fa82e27a8/5d49da1a15f2c1a70b01edd1_twitter.svg" alt="" class="about_founder-twitter-icon"/></a>
                  </li>
                <li class="about_founder-li">
                  <img src="https://www.hamk.fi/wp-content/uploads/2018/11/Khoa-Dang-Oct-2018.jpg"  alt="" class="about_team-photo"/>
                  <h3 class="about_founder-name">Khoa Dang</h3>
                  <p class="about_founder-title">Project Engineer</p><a href="https://twitter.com/bryantchou" class="about_founder-twitter w-inline-block"><img src="https://assets-global.website-files.com/5d49b9b7faeb2d4fa82e27a8/5d49da1a15f2c1a70b01edd1_twitter.svg" alt="" class="about_founder-twitter-icon"/></a>
                  </li>
                <li class="about_founder-li">
                  <img src="data:image/jpeg;base64,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"  alt="" class="about_team-photo"/>
                  <h3 class="about_founder-name">Quoc Bao Tran</h3>
                  <p class="about_founder-title">Research Assistant</p><a href="https://twitter.com/thesergie" class="about_founder-twitter w-inline-block"><img src="https://assets-global.website-files.com/5d49b9b7faeb2d4fa82e27a8/5d49da1a15f2c1a70b01edd1_twitter.svg" alt="" class="about_founder-twitter-icon"/></a>
                  </li>
                <li class="about_founder-li">
                  <img src="https://res.cloudinary.com/etoro/image/fetch/w_1.5/q_auto/https://etoro-cdn.etorostatic.com/avatars/150X150/7237254/2.jpg"  alt="" class="about_team-photo"/>
                  <h3 class="about_founder-name">Ivan Khvorostin</h3>
                  <p class="about_founder-title">Research Assistant</p><a href="https://twitter.com/thesergie" class="about_founder-twitter w-inline-block"><img src="https://assets-global.website-files.com/5d49b9b7faeb2d4fa82e27a8/5d49da1a15f2c1a70b01edd1_twitter.svg" alt="" class="about_founder-twitter-icon"/></a>
                </li>
              </ul>
              </div>
            </div>
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