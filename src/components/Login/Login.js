import React, { Component } from "react";
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

export default class Login extends Component{
  render(){
    return (
    <div class="container">
      <div className="main-content">
        <div class="wrap-login100">
        
            <form class="login100-form validate-form">
                
                <span class="login100-form-title">
                    Sign in
                </span>
                <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                    <input class="input100" type="text" name="email" placeholder="Email"/>
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <EmailIcon />
                    </span>
                </div>
                <div class="wrap-input100 validate-input" data-validate="Password is required">
                    <input class="input100" type="password" name="pass" placeholder="Password"/>
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <LockIcon/>
                    </span>
                </div>
                <div class="container-login100-form-btn">
                    <button class="login100-form-btn">
                        Let's go!
                    </button>
                </div>
                <div class="text-center p-t-12">
                    <span class="txt1">
                        Forgot
                    </span>
                    <a class="txt2" href="#">
                        Username / Password?
                    </a>
                </div>

            </form>
        </div>

      </div>
    </div>  
    );
  }
}