import React, { Component } from 'react';
import store from './store'
import './App.css';
import { observer } from 'mobx-react'
import Game from './game'
import StartScreen from './start-screen'

export default @observer class App extends Component {
  constructor(props) {
    super(props)

    this.store = store
  }

  componentDidMount() {
    this.store.fetchQuestions()
  }

  render() {
    return (
      <div className="app">
        <audio src={this.store.audioFile} autoPlay />
        <div className="app-container">
          {this.store.started ? <Game /> : <StartScreen />}
        </div>
      </div>
    );
  }
}
