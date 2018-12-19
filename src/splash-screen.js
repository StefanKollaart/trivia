import React, { Component } from 'react';
import store from './store'
import { observer } from 'mobx-react'

export default @observer class SplashScreen extends Component {
  constructor(props) {
    super(props)
    this.store = store
  }

  render() {
    return(
      <div className="splashscreen">
        <p>Aantal vragen goed: {this.store.questions.length - this.store.questionsWrong}</p>
        <p>Gewonnen geldbedrag: €{this.store.questionsWrong === 0 ? String((this.store.price / this.store.playerCount).toFixed(2)).replace(".", ",") : "0"}</p>
      </div>
    )
  }
}
