import React, { Component } from 'react';
import Video from './video.js'
import QuestionBoard from './question-board.js'

export default class Game extends Component {
  render() {
    return(
      <div className="game">
        <Video />
        <QuestionBoard />
      </div>
    )
  }
}
