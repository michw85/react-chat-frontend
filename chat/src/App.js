import React, {Component} from 'react'
import { Route } from "react-router-dom";

import {Field, Home} from 'page'

class App extends Component {
  render(){
  return <div className="wrapper">
      <Home />
    </div>
  }
}
// <Route exact path="/home" component={Home} />
// <Route exact path="/field" component={Field} />
export default App
