import React, { Component } from 'react';
import { observer } from 'mobx-react'
import store from './store'

export default @observer class Stats extends Component {
  constructor(props) {
    super(props)
    this.store = store
  }

  render() {
    return(
      <div className="stats">
        <p>Vraag {this.store.currentQuestion + 1}/{this.store.questions.length}</p>
        <p className={`player-amount ${this.store.isCountingDownPlayers ? 'is-counting-down-players' : ''}`}>{this.store.playerCount} spelers over</p>
      </div>
    )
  }
}
