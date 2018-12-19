import React, { Component } from 'react';
import { observer } from 'mobx-react'
import store from './store'
import Answer from './answer'
import TextQuestion from './text-question'

export default @observer class QuestionBoard extends Component {
  constructor(props) {
    super(props)
    this.store = store
  }

  render() {
    const question = this.store.questions[this.store.currentQuestion]
    return(
      <div className="text-question">
        <h2>{question.question}</h2>
        <Answer answer={question.answer_1} id={1} question={question} />
        <Answer answer={question.answer_2} id={2} question={question} />
        <Answer answer={question.answer_3} id={3} question={question} />
      </div>
    )
  }
}
