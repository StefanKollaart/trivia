import { action, observable } from 'mobx'
import axios from 'axios'
import bg from './assets/bg.mp3'
import bumper from './assets/bumper.mp3'
import finalBumper from './assets/final-bumper.mp3'

class Store {
  @observable questions = []
  @observable playerCount = 0
  @observable currentQuestion = -1
  @observable questionsWrong = 0
  @observable timer = 100
  @observable timerTotal = 100
  @observable started = false
  @observable showImage = false
  @observable pickedAnswer = -1
  @observable showAnswers = false
  @observable audioFile = bumper
  @observable playButtonPressed = false
  @observable price = 5000
  @observable splashscreen = false
  @observable isCountingDownPlayers = false

  @action fetchQuestions() {
    axios.get('https://www.liquid-paint.nl/quiz.json').then((res) => {
      this.questions = res.data
      this.playerCount = res.data.length * 2000 + (Math.floor(Math.random() * 500) + 200)
    })
  }

  @action setAnswer(id) {
    this.pickedAnswer = id
  }

  setPlayButton() {
    this.playButtonPressed = true
    this.startQuiz()
  }

  setTimer(amount) {
    this.timer = amount * 25
    this.timerTotal = amount * 25
    this.startTimer()
  }

  startTimer() {
    setTimeout(() => {
      this.timer -= 1

      if (this.timer == 0) {
        this.timerDone()
      } else {
        this.startTimer()
      }
    }, 30)
  }

  timerDone() {
    if (this.started) {
      this.playingTimerDone()
    } else {
      this.startQuiz()
    }
  }

  playingTimerDone() {
    if (this.showImage) {
      this.showImage = false
      this.setTimer(10)
    } else {
      this.answers()
      setTimeout(() => {
        this.nextQuestion()
      }, 5000)
    }
  }

  answers() {
    this.showAnswers = true
    if (this.pickedAnswer !== this.questions[this.currentQuestion].right_answer) {
      this.questionsWrong += 1
    }
    if ((this.questions.length) == this.currentQuestion + 1) {
      this.audioFile = finalBumper
    }
    var losers = Math.floor(Math.random() * 2000) + 1000
    var newPlayers = this.playerCount - losers
    var perItem = Math.floor(losers / 200)
    this.isCountingDownPlayers = true
    this.countDownLosers(perItem, newPlayers)
  }

  countDownLosers(perItem, newPlayers) {
    setTimeout(() => {
      this.playerCount -= perItem
      if (this.playerCount > newPlayers) {
        this.countDownLosers(perItem, newPlayers)
      } else {
        this.isCountingDownPlayers = false
      }
    }, 5)
  }

  startQuiz() {
    this.started = true
    this.audioFile = bg
    this.nextQuestion()
  }

  nextQuestion() {
    this.showAnswers = false
    this.pickedAnswer = -1
    if ((this.questions.length) == this.currentQuestion + 1) {
      this.finishQuiz()
    } else {
      this.currentQuestion += 1
      if (this.questions[this.currentQuestion].image != undefined) {
        this.showImage = true
        this.setTimer(7)
      } else {
        this.setTimer(10)
      }
    }
  }

  finishQuiz() {
    this.audioFile = finalBumper
    this.finished = true
    this.started = false
    this.splashscreen = true
  }
}

const store = new Store();
export default store;
