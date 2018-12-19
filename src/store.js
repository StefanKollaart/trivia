import { action, observable } from 'mobx'
import axios from 'axios'

class Store {
  @observable questions = []

  @action fetchQuestions() {
    axios.get('https://www.liquid-paint.nl/quiz.json').then((res) => {
      this.questions = res.data
    })
  }
}

const store = new Store();
export default store;
