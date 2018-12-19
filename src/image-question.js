import React, { Component } from 'react';
import { observer } from 'mobx-react'
import store from './store'
import Answer from './answer'

export default @observer class ImageQuestion extends Component {
  constructor(props) {
    super(props)
    this.store = store
  }

  render() {
    const question = this.store.questions[this.store.currentQuestion]
    return(
      <div className="image-question">
        <h2>Let op deze afbeelding</h2>
        <img src={question.image} />
      </div>
    )
  }
}
