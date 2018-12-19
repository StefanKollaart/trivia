import React, { Component } from 'react';
import store from './store'
import { observer } from 'mobx-react'

export default @observer class Answer extends Component {
  constructor(props) {
    super(props)

    this.store = store
  }

  render() {
    if (this.store.showAnswers) {
      return(
        <div className={`answer answer-done ${this.props.id == this.props.question.right_answer ? 'right-answer' : 'wrong-answer'} ${this.store.pickedAnswer == this.props.id && this.props.id != this.props.question.right_answer ? 'own-wrong' : ''} ${this.props.question.right_answer == this.props.id ? 'own-right' : ''}`}>
          <h3>{this.props.answer}</h3>
        </div>
      )
    } else {
      return(
        <div className={`answer ${this.props.id === this.store.pickedAnswer ? 'answer-checked' : ''}`} onClick={() => { this.store.setAnswer(this.props.id)}}>
          <h3>{this.props.answer}</h3>
        </div>
      )
    }
  }
}
