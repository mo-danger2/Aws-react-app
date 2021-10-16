import React from 'react';
import { Component } from 'react';
import SubmitEvent from './components/Submit'
import Detail from './components/Detail'
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";


export default class App extends Component {

   
    render() {
      return (
   <><SubmitEvent />
   <Detail/>
   <Signup />
   <Logout />
   <Logout /></>
      )
    }
  }