import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class Quiz extends Component {
  state = {
    currentCard: 0,
    showAnswer: false,
    correct: 0
  }

  correct = () => {
    this.setState(state => ({
      currentCard: state.currentCard + 1,
      showAnswer: false,
      correct: state.correct + 1
    }))
  }

  incorrect = () => {
    this.setState(state => ({
      currentCard: state.currentCard + 1,
      showAnswer: false
    }))
  }

  toggleAnswer = () => {
    this.setState(state => ({
      showAnswer: ! state.showAnswer
    }))
  }

  render() {
    const { questions } = this.props.navigation.state.params
    const cardNumber = this.state.currentCard
    const cardTotal = questions.length

    if (cardNumber >= cardTotal) {
      const pct = parseInt(this.state.correct / cardTotal * 100);
      return (
        <View>
          <Text>Quiz Score: {pct}%</Text>
        </View>
      )
    }

    return (
      <View>
        <Text>{cardNumber+1}/{cardTotal}</Text>
        <Text>{questions[cardNumber].question}</Text>
        { this.state.showAnswer 
            && <Text>{questions[cardNumber].answer}</Text>
        }
        <TouchableOpacity
          onPress={this.toggleAnswer}>
          <Text>
            Answer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.correct}>
          <Text>
            Correct
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.incorrect}>
          <Text>
            Incorrect
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
