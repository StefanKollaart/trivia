import React, { Component } from 'react';
import Video from './video.js'
import QuestionBoard from './question-board.js'
import store from './store'
import './App.css';

export default class extends Component {
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
        <div className="app-container">
          <Video />
          <QuestionBoard />
        </div>
      </div>
    );
  }
}
