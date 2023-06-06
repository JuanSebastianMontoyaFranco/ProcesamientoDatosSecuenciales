import React, { Component } from 'react'
import LoginView from './Components/Login/LoginView'
import './App.css'


class App extends Component {
  constructor() {
    super()
    this.state = {
      component: 'login',
    }
  }

  handleChange = (value) => {
    this.setState({ component: value })
  }

  render() {
    return <LoginView changeView={this.handleChange} />
  }
}

export default App