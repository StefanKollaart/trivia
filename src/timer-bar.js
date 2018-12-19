import React, { Component } from 'react';
import store from './store'
import { observer } from 'mobx-react'
var _ = require('lodash');

export default @observer class TimerBar extends Component {
  constructor(props) {
    super(props)
    this.store = store
  }

  renderBar = () => {
    var bar = []
    _.times((this.store.timerTotal * 10), (index) => {
      bar.push(<span className={`timer-bar-item ${(this.store.timer * 10) > index ? 'timer-bar-item-green' : 'timer-bar-item-red'}`}></span>);
    });
    return bar
  }

  render() {
    return(
      <div className="timer-bar">
        {this.renderBar()}
      </div>
    )
  }
}
