import React, { Component } from 'react';
import { observer } from 'mobx-react'
import store from './store'
import Answer from './answer'
import TextQuestion from './text-question'
import ImageQuestion from './image-question'
import Stats from './stats'
import TimerBar from './timer-bar'

export default @observer class QuestionBoard extends Component {
  constructor(props) {
    super(props)
    this.store = store
  }

  stillPlaying = () => {
    return <div className="game-status">Je speelt nog mee voor €{String((this.store.price / this.store.playerCount).toFixed(2)).replace(".", ",")} per winnaar.</div>
  }

  out = () => {
    return <div className="game-status">Je bent afgevallen. Je kan niet meer winnen.</div>
  }

  render() {
    const question = this.store.questions[this.store.currentQuestion]
    if (question) {
      return(
        <div className="question-board">
          <Stats />
          <TimerBar />
          {this.store.showImage ? <ImageQuestion /> : <TextQuestion />}
          {
            this.store.questionsWrong == 0 ? this.stillPlaying() : this.out()
          }
        </div>
      )
    } else {
      return null
    }
  }
}
