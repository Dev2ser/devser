import React, { Component } from 'react'
import fire from '../config/Fire'
import 'bootstrap/dist/css/bootstrap.css'

class Dashboard extends Component {
  logout = () => {
    fire.auth().signOut()
  }

  render() {
    const styles = {
      position: 'absolute',
      top: 20,
      right: 20,
      width: 'auto',
      height: 'auto'
    }
    return (
      <div className="align-items-center" style={{ height: '100%' }}>
        <h1
          style={{
            left: 0,
            marginTop: -100,
            position: 'absolute',
            textAlign: 'center',
            top: '50%',
            width: '100%'
          }}
        >
          Hello Bros!
        </h1>
        <button className="btn btn-danger" style={styles} onClick={this.logout}>
          Logout!
        </button>
      </div>
    )
  }
}

export default Dashboard
