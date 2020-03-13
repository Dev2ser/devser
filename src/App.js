import React, { Component } from 'react'
import './App.css'
import fire from './config/Fire'
import Admin from './components/Admin'
import SignIn from './components/SignIn'
import Dashboard from './components/ui/dashboard/Dashboard'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null
    }
    this.authListener = this.authListener.bind(this)
  }

  componentDidMount() {
    this.authListener()
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      console.log(user)
      if (user) {
        this.setState({ user })
        sessionStorage.setItem('user', user.uid)
      } else {
        this.setState({ user: null })
        sessionStorage.removeItem('user')
      }
    })
  }

  render() {
    return <div className="App">{this.state.user ? <Admin /> : <SignIn />}</div>
  }
}

export default App
