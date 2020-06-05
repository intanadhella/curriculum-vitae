import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navigation from './components/Navigation'
import Resume from './components/Resume/Index'

class App extends Component {

  render() {

    return (
      <div id="page-top">
        <Navigation />
        <Resume />
      </div>
    )
  }
}

export default App
