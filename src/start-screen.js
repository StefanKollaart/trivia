import React, { Component } from 'react';
import store from './store'
import { observer } from 'mobx-react'
import SplashScreen from './splash-screen'

export default @observer class Timer extends Component {
  constructor(props) {
    super(props)
    this.store = store
  }

  render() {
    return(
      <div className="timer">
        <h2>De Zwakste Schakel</h2>
        {!this.store.splashscreen && <p className="timer-bg">€5000</p>}
        {this.store.splashscreen ? <SplashScreen /> : <button onClick={() => {this.store.setPlayButton()}}>Start de klok</button>}
      </div>
    )
  }
}
